import { useContext, useState } from 'react';
import { GridContext } from '../../contexts/GridContext';
import { ToolbarContext } from '../../contexts/ToolbarContext';

const Cell = ({ value, onChange, rowIndex, colIndex , bgColor, color , bold, fontSize ,align}) => {
  const { selectedCell, setSelectedCell } = useContext(GridContext);
  const [isEditing, setIsEditing] = useState(false);
       


  const isSelected =
    selectedCell.rowIndex === rowIndex && selectedCell.colIndex === colIndex;

  const handleSelectCell = () => {
    setSelectedCell({
      rowIndex,
      colIndex,
      colLabel: String.fromCharCode(65 + colIndex),
    });
    setIsEditing(true);
  };
  const style = {
    fontSize : fontSize+"px" || undefined,
    textAlign: align || undefined
  }

  return (
    <div
      className={`w-[100px] h-[30px] border overflow-hidden ${
        isSelected ? 'border-2 border-green-500' : 'border-gray-300'
      }`}
      onClick={handleSelectCell}

    >
      {isEditing ? (
        <input
          className={`outline-none border-none  flex items-center w-full h-full ${bold && "font-bold"} px-1 ${bgColor} ${color} `}
          value={value}
          style={style}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
          type="text"
        />
      ) : (
        <div  style={style} className={`px-1 flex items-center  truncate ${bold && "font-bold"} w-full h-full ${bgColor} ${color} `}>{value}</div>
      )}
    </div>
  );
};

export default Cell;
