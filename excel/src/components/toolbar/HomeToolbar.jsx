import { ToolbarContext } from '../../contexts/ToolbarContext';
import { GridContext } from '../../contexts/GridContext';
import { useContext, useEffect, useRef } from 'react';
import Icons from '../../constants/icons';

const HomeToolbar = () => {
  const {
    toggleFontSizeDropdown,
    isFontSizeDropdownOpen,
    fontSizeValue,
    setFontSizeValue,
    toggleColor,
    colorValue,
    isColorDropDown,
    setColorValue,
    isBgColorDropDown,
    toggleBgColor,
    bgColorValue,
    setBgColorValue
  } = useContext(ToolbarContext);

  const { selectedCell, updateCellStyle,data} = useContext(GridContext);

  const value = data[selectedCell.rowIndex][selectedCell.colIndex]
  useEffect(()=>{
    setColorValue({...colorValue, ["textColor"]: value.textColor})
  }, [value])
 
  const closeTimerRef = useRef(null);

  const fontSizes = [11, 13, 14, 16, 18];
  const colors = [
    { name: "green", bg: "bg-green-500", text: "text-green-500" },
    { name: "red", bg: "bg-red-500", text: "text-red-500" },
    { name: "black", bg: "bg-black", text: "text-black" },
    { name: "yellow", bg: "bg-yellow-400", text: "text-yellow-400" },
    { name: "blue", bg: "bg-blue-500", text: "text-blue-500" },
    { name: "purple", bg: "bg-purple-500", text: "text-purple-500" },
    { name: "pink", bg: "bg-pink-500", text: "text-pink-500" },
    { name: "orange", bg: "bg-orange-500", text: "text-orange-500" },
    { name: "teal", bg: "bg-teal-500", text: "text-teal-500" },
    { name: "cyan", bg: "bg-cyan-500", text: "text-cyan-500" },
    { name: "indigo", bg: "bg-indigo-500", text: "text-indigo-500" },
    { name: "rose", bg: "bg-rose-500", text: "text-rose-500" },
    { name: "lime", bg: "bg-lime-500", text: "text-lime-500" },
    { name: "amber", bg: "bg-amber-500", text: "text-amber-500" },
    { name: "white", bg: "bg-white", text: "text-white" },
    { name: "gray", bg: "bg-gray-500", text: "text-gray-500" },
  ];

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      if (isFontSizeDropdownOpen) toggleFontSizeDropdown();
      if (isColorDropDown) toggleColor()
    }, 500);
  };

  const handleMouseEnter = () => {
    // Cancel the close timer if user moves back in
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm py-1 border-b px-3 flex items-center gap-2 overflow-x-auto">
      <div className="tool-btn"><Icons.undo /></div>
      <div className="tool-btn"><Icons.clipboard /></div>
      <div className="tool-btn"><Icons.paintBrush /></div>

      <div className="divider" />

      <div className="dropdown-box w-[160px] flex justify-between items-center">
        <span>Calibri (Body)</span>
        <Icons.dropdown />
      </div>


      <div className="dropdown-box w-[70px] ">
        <div
          onClick={toggleFontSizeDropdown}
          className="flex justify-between items-center cursor-pointer"
        >
          <span>{fontSizeValue}</span>
          <Icons.dropdown />
        </div>


      </div>

      <div className="tool-btn font-bold">B</div>
      <div className="tool-btn"><Icons.borderAll /></div>

      <div className="tool-btn flex items-center gap-1" onClick={()=> toggleBgColor()}>
        <Icons.fillColor />
        <span className={`color-box ${bgColorValue.bg}`} />
      </div>


      <div className="tool-btn flex items-center gap-1" onClick={() => {
        toggleColor()

      }}>
        <span className={`font-bold ${colorValue.text}`}>A</span>

        <span className={`color-box ${colorValue.bg}`} />
      </div>

      <div className="tool-btn"><Icons.more /></div>

      <div className="divider" />

      <div className="tool-btn"><Icons.alignLeft /></div>
      <div className="tool-btn"><Icons.alignCenter /></div>
      <div className="tool-btn"><Icons.alignRight /></div>

      <div className="divider" />

      <div className="dropdown-box w-[120px] flex justify-between items-center">
        <span>General</span>
        <Icons.dropdown />
      </div>

      <div className="tool-btn"><Icons.dollar /></div>
      <div className="tool-btn"><Icons.euro /></div>
      <div className="tool-btn"><Icons.sum /></div>
      <div className="tool-btn"><Icons.search /></div>
      <div className="tool-btn"><Icons.grid /></div>
      {isFontSizeDropdownOpen && (
        <div
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="absolute top-full   left-[340px] z-60 bg-white shadow-md w-10 rounded-t rounded-md"
        >
          {fontSizes.map((fontSize) => (
            <div
              key={fontSize}
              onClick={() => {
                setFontSizeValue(fontSize);
                toggleFontSizeDropdown();
              }}
              className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
            >
              {fontSize}
            </div>
          ))}
        </div>
      )}
      {
        isColorDropDown && (
          <div
            onMouseLeave={handleMouseLeave}
            className="absolute top-full px-1 py-1  h-16 w-56 flex flex-wrap justify-start gap-2 left-[420px] z-60 bg-white shadow-md rounded-t rounded-md">
            {colors.map((color) => {
              return <div
                key={color.name}
                onClick={() => {
                  setColorValue(color)
                  updateCellStyle(selectedCell.rowIndex, selectedCell.colIndex, { textColor: color.text });
                  toggleColor()
                }}
                className={`p-1 w-5 h-5 ${color.bg} hover:border hover:border-gray-400 border`}
              >

              </div>
            })}

          </div>)
      }

      {
        isBgColorDropDown && (
          <div
            onMouseLeave={handleMouseLeave}
            className="absolute top-full px-1 py-1  h-16 w-56 flex flex-wrap justify-start gap-2 left-[420px] z-60 bg-white shadow-md rounded-t rounded-md">
            {colors.map((color) => {
              return <div
                key={color.name}
                onClick={() => {
                  setBgColorValue(color)
                  updateCellStyle(selectedCell.rowIndex, selectedCell.colIndex, { bg: color.bg });
                  toggleBgColor()
                }}
                className={`p-1 w-5 h-5 ${color.bg} hover:border hover:border-gray-400 border`}
              >

              </div>
            })}

          </div>)
      }

    </div>
  );
};

export default HomeToolbar;