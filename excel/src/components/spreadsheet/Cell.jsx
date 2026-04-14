import { useContext, useState } from 'react';
import { GridContext } from '../../contexts/GridContext';
import { ToolbarContext } from '../../contexts/ToolbarContext';

const Cell = ({ value, onChange, rowIndex, colIndex , bgColor, color}) => {
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

  return (
    <div
      className={`w-[100px] h-[30px] border overflow-hidden ${
        isSelected ? 'border-2 border-green-500' : 'border-gray-300'
      }`}
      onClick={handleSelectCell}

    >
      {isEditing ? (
        <input
          className={`outline-none border-none w-full h-full px-1 ${bgColor} ${color}`}
          value={value}
          
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
          type="text"
        />
      ) : (
        <div className={`px-1 py-1 text-sm truncate w-full h-full ${bgColor} ${color} `}>{value}</div>
      )}
    </div>
  );
};

export default Cell;
