import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdPivotTableChart, MdOutlineBarChart } from 'react-icons/md';
import { FaTable } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import { PiChartScatter } from 'react-icons/pi';
import { FcPieChart } from 'react-icons/fc';
import { GiHistogram } from 'react-icons/gi';
import { IoLinkOutline } from 'react-icons/io5';
import { FaRegCommentAlt } from 'react-icons/fa';
import { LuLetterText, LuShapes } from 'react-icons/lu';
import { CiImageOn } from 'react-icons/ci';

const InsertToolbar = () => {
  return (
    <div className="w-[98vw] bg-white rounded-lg border-b py-1 flex items-center gap-3 overflow-x-auto">
      <div className="insert-item">
        <MdPivotTableChart className="icon-sm" />
        <span>PivotTable</span>
        <RiArrowDropDownLine />
      </div>

      <div className="insert-item">
        <FaTable className="icon-sm" />
        <span>Table</span>
      </div>

      <div className="insert-item">
        <span>Forms</span>
        <RiArrowDropDownLine />
      </div>

      <div className="insert-item">
        <CiImageOn className="icon-sm" />
        <span>Pictures</span>
        <RiArrowDropDownLine />
      </div>

      <div className="insert-item">
        <LuShapes className="icon-sm" />
        <span>Shapes</span>
        <RiArrowDropDownLine />
      </div>

      <div className="divider" />

      <div className="flex items-center gap-1">
        <div className="chart-btn">
          <MdOutlineBarChart />
        </div>
        <div className="chart-btn">
          <FaChartLine />
        </div>
        <div className="chart-btn">
          <PiChartScatter />
        </div>
        <div className="chart-btn">
          <FcPieChart />
        </div>
        <div className="chart-btn">
          <GiHistogram />
        </div>
      </div>

      <div className="divider" />

      <div className="insert-item disabled">
        <span>Slicer</span>
      </div>

      <div className="insert-item">
        <IoLinkOutline className="icon-sm" />
        <span>Link</span>
      </div>

      <div className="insert-item">
        <FaRegCommentAlt className="icon-sm" />
        <span>New Comment</span>
      </div>

      <div className="insert-item">
        <LuLetterText className="icon-sm" />
        <span>Text Box</span>
      </div>
    </div>
  );
};

export default InsertToolbar;
