import { useContext } from 'react';
import Cell from './Cell';
import { GridContext } from '../../contexts/GridContext';


const Grid = () => {
  const { data, updateCellValue, colCount } = useContext(GridContext);





  return (
    <div className="overflow-auto h-screen w-screen">
      <div className="inline-block">
        <div className="flex sticky top-0 z-20">
          <div className="min-w-[50px] w-[50px] h-[30px] border sticky left-0 z-10 bg-[#dfd8d1]" />
          {Array.from({ length: colCount }, (_, colIndex) => (
            <div
              key={colIndex}
              className="min-w-[100px] w-[100px] h-[30px] border bg-[#f3f2f1] flex items-center justify-center text-sm font-bold"
            >
              {String.fromCharCode(65 + colIndex)}
            </div>
          ))}
        </div>

        {data.map((rowData, rowIndex) => (
          <div key={rowIndex} className="flex">
            <div className="min-w-[50px] w-[50px] h-[30px] border sticky left-0 z-10 bg-[#f3f2f1] flex items-center justify-center text-sm font-bold">
              {rowIndex + 1}
            </div>

            {rowData.map((cellValue, colIndex) => (
              <Cell
                key={colIndex}
                bold={cellValue.isBold}
                fontSize={cellValue.size}
                rowIndex={rowIndex}
                colIndex={colIndex}
                bgColor={cellValue.bg}
                color={cellValue.textColor}
                value={cellValue.text}
                cellStyle={cellValue}
                align={cellValue.align}
                onChange={(newValue) => updateCellValue(rowIndex, colIndex, newValue)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
