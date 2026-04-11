import { RiArrowDropDownLine } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";

const FunctionBar = () => {
  return (
    <div className="w-full bg-white rounded-lg border-b px-3 py-1 mt-1 flex items-center gap-2 ">

      {/* Cell Name (D1) */}
      <div className="name-box ">
        <span>D1</span>
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