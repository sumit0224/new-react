import { useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import { gridContext } from "../context/GridContext";

const FunctionBar = () => {
  const {selectedCell} = useContext(gridContext)
  const cell =  selectedCell.row +1
  return (
    <div className="function-bar">

      {/* Cell Name (D1) */}
      <div className="name-box ">
        <span>{selectedCell.col+ cell}</span>
        <RiArrowDropDownLine />
      </div>

      {/* Cancel / Accept */}
      <div className="flex items-center gap-1">
        <button className="icon-btn">✕</button>
        <button className="icon-btn">✔</button>
      </div>

      {/* fx */}
      <div className="fx-box">
        <TbMathFunction/>
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter value or formula"
        className="formula-input"
      />
    </div>
  );
};

export default FunctionBar;