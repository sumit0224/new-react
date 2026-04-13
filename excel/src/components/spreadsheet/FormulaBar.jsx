import { useContext } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { TbMathFunction } from 'react-icons/tb';
import { GridContext } from '../../contexts/GridContext';

const FormulaBar = () => {
  const { selectedCell, data, updateCellValue } = useContext(GridContext);

  const cellValue = data[selectedCell.rowIndex]?.[selectedCell.colIndex] ?? '';
  const cellLabel = `${selectedCell.colLabel}${selectedCell.rowIndex + 1}`;

  return (
    <div className="function-bar">
      <div className="name-box">
        <span>{cellLabel}</span>
        <RiArrowDropDownLine />
      </div>

      <div className="flex items-center gap-1">
        <button className="icon-btn" type="button">
          ✕
        </button>
        <button className="icon-btn" type="button">
          ✔
        </button>
      </div>

      <div className="fx-box">
        <TbMathFunction />
      </div>

      <input
        type="text"
        value={cellValue}
        onChange={(event) =>
          updateCellValue(selectedCell.rowIndex, selectedCell.colIndex, event.target.value)
        }
        placeholder="Enter value or formula"
        className="formula-input"
      />
    </div>
  );
};

export default FormulaBar;
