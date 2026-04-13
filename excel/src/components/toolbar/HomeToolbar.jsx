import { useContext } from 'react';
import Icons from '../../constants/icons';
import { ToolbarContext } from '../../contexts/ToolbarContext';

const HomeToolbar = () => {
  const {
    toggleFontSizeDropdown,
    isFontSizeDropdownOpen,
    fontSizeValue,
    setFontSizeValue,
  } = useContext(ToolbarContext);

  const fontSizes = [11, 13, 14, 16, 18];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm py-1 border-b px-3 flex items-center gap-2 overflow-x-auto">
      <div className="tool-btn">
        <Icons.undo />
      </div>

      <div className="tool-btn">
        <Icons.clipboard />
      </div>

      <div className="tool-btn">
        <Icons.paintBrush />
      </div>

      <div className="divider" />

      <div className="dropdown-box w-[160px] flex justify-between items-center">
        <span>Calibri (Body)</span>
        <Icons.dropdown />
      </div>

      <div className="dropdown-box w-[70px] relative z-50">
        <div
          onClick={toggleFontSizeDropdown}
          className="flex justify-between items-center cursor-pointer"
        >
          <span>{fontSizeValue}</span>
          <Icons.dropdown />
        </div>

        {isFontSizeDropdownOpen && (
          <div className="absolute top-full left-0 bg-white shadow-md w-full">
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
      </div>

      <div className="tool-btn font-bold">B</div>

      <div className="tool-btn">
        <Icons.borderAll />
      </div>

      <div className="tool-btn flex items-center gap-1">
        <Icons.fillColor />
        <span className="color-box bg-yellow-400" />
      </div>

      <div className="tool-btn flex items-center gap-1">
        <span className="font-bold">A</span>
        <span className="color-box bg-red-500" />
      </div>

      <div className="tool-btn">
        <Icons.more />
      </div>

      <div className="divider" />

      <div className="tool-btn">
        <Icons.alignLeft />
      </div>
      <div className="tool-btn">
        <Icons.alignCenter />
      </div>
      <div className="tool-btn">
        <Icons.alignRight />
      </div>

      <div className="divider" />

      <div className="dropdown-box w-[120px] flex justify-between items-center">
        <span>General</span>
        <Icons.dropdown />
      </div>

      <div className="tool-btn">
        <Icons.dollar />
      </div>
      <div className="tool-btn">
        <Icons.euro />
      </div>

      <div className="tool-btn">
        <Icons.sum />
      </div>

      <div className="tool-btn">
        <Icons.search />
      </div>

      <div className="tool-btn">
        <Icons.grid />
      </div>
    </div>
  );
};

export default HomeToolbar;
