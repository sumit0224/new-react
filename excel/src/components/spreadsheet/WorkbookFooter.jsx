import { useContext } from 'react';
import { TbMathGreater } from 'react-icons/tb';
import { FaLessThan, FaPlus } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SheetContext } from '../../contexts/SheetContext';
import { GlobalContext } from '../../contexts/GlobalContext';

const WorkbookFooter = () => {
  const {
    sheets,
    activeSheetId,
    setActiveSheetId,
    addSheet,
    renameSheet,
    deleteSheet,
  } = useContext(SheetContext);

  const {
    editingSheetIndex,
    setEditingSheetIndex,
    isSheetMenuOpen,
    setIsSheetMenuOpen,
  } = useContext(GlobalContext);

  const handleSheetRename = (event, sheetId) => {
    renameSheet(sheetId, event.target.value);
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
          {sheets.map((sheet) => (
            <div
              key={sheet.id}
              onClick={() => {
                setActiveSheetId(sheet.id);
                setIsSheetMenuOpen(false);
              }}
              className={`px-3 py-1 rounded cursor-pointer text-sm ${
                activeSheetId === sheet.id ? 'bg-[#217346] text-white' : 'hover:bg-[#edebe9]'
              }`}
            >
              {sheet.title}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1 ml-3">
        {sheets.map((sheet, index) => (
          <input
            key={sheet.id}
            value={sheet.title}
            readOnly={editingSheetIndex !== index}
            onClick={() => setActiveSheetId(sheet.id)}
            onDoubleClick={() => setEditingSheetIndex(index)}
            onBlur={() => setEditingSheetIndex(null)}
            onChange={(event) => handleSheetRename(event, sheet.id)}
            className={`px-4 w-[100px] py-1 border rounded-t outline-none ${
              activeSheetId === sheet.id
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
