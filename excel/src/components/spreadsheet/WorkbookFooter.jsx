import { useContext } from 'react';
import { TbMathGreater } from 'react-icons/tb';
import { FaLessThan, FaPlus } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GlobalContext } from '../../contexts/GlobalContext';

const WorkbookFooter = () => {
  const {
    sheets,
    setSheets,
    activeSheet,
    setActiveSheet,
    editingSheetIndex,
    setEditingSheetIndex,
    isSheetMenuOpen,
    setIsSheetMenuOpen,
  } = useContext(GlobalContext);

  const addSheet = () => {
    const nextSheetName = `Sheet${sheets.length + 1}`;
    setSheets((prevSheets) => [...prevSheets, nextSheetName]);
    setActiveSheet(nextSheetName);
  };

  const handleSheetRename = (event, index) => {
    const nextValue = event.target.value;
    setSheets((prevSheets) =>
      prevSheets.map((sheet, sheetIndex) => (sheetIndex === index ? nextValue : sheet)),
    );
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-[36px] bg-[#f3f2f1] border-t border-[#e1dfdd] flex items-center px-2 text-[13px]">
      <div className="flex items-center gap-2 text-[#605e5c] text-lg">
        <FaLessThan className="cursor-pointer hover:bg-[#edebe9] p-1 rounded" />
        <TbMathGreater className="cursor-pointer hover:bg-[#edebe9] p-1 rounded" />
        <RxHamburgerMenu
          onClick={() => setIsSheetMenuOpen((prevOpen) => !prevOpen)}
          className="cursor-pointer hover:bg-[#edebe9] p-1 rounded"
        />
      </div>

      {isSheetMenuOpen && (
        <div className="w-[160px] absolute left-8 bottom-10 bg-[#f3f2f1] rounded-lg shadow-lg max-h-[150px] overflow-y-auto px-2 py-2">
          {sheets.map((sheetName, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveSheet(sheetName);
                setIsSheetMenuOpen(false);
              }}
              className={`px-3 py-1 rounded cursor-pointer text-sm ${
                activeSheet === sheetName ? 'bg-[#217346] text-white' : 'hover:bg-[#edebe9]'
              }`}
            >
              {sheetName}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1 ml-3">
        {sheets.map((sheetName, index) => (
          <input
            key={index}
            value={sheetName}
            readOnly={editingSheetIndex !== index}
            onClick={() => setActiveSheet(sheetName)}
            onDoubleClick={() => setEditingSheetIndex(index)}
            onBlur={() => setEditingSheetIndex(null)}
            onChange={(event) => handleSheetRename(event, index)}
            className={`px-4 w-[100px] py-1 border rounded-t outline-none ${
              activeSheet === sheetName
                ? 'bg-white text-black border-[#e1dfdd]'
                : 'bg-[#f3f2f1] text-[#605e5c] border-transparent'
            }`}
          />
        ))}

        <div
          onClick={addSheet}
          className="flex items-center justify-center w-7 h-7 cursor-pointer hover:bg-[#edebe9] rounded"
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default WorkbookFooter;
