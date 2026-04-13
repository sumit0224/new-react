import { MdOutlineSettings } from "react-icons/md";
import { TbPrinter } from "react-icons/tb";
import { LuSplit } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { BiRightToLeft } from "react-icons/bi";

const PageLayoutToolbar = () => {
  return (
    <div className="w-[98vw] bg-white rounded-lg border-b px-3 py-1 flex items-center justify-between">

      {/* Left side */}
      <div className="flex items-center gap-3">

        {/* Page Setup */}
        <div className="layout-item">
          <MdOutlineSettings className="icon-sm" />
          <span>Page Setup</span>
        </div>

        {/* Print Area */}
        <div className="layout-item">
          <TbPrinter className="icon-sm" />
          <span>Print Area</span>
          <RiArrowDropDownLine />
        </div>

        {/* Breaks */}
        <div className="layout-item">
          <LuSplit className="icon-sm" />
          <span>Breaks</span>
          <RiArrowDropDownLine />
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Sheet Direction */}
        <div className="layout-item">
          {/* <BiRightToLeft className="icon-sm" /> */}
          <span>Sheet Right-to-Left</span>
        </div>

      </div>

      {/* Right dropdown */}
      <div className="dropdown-btn">
        <RiArrowDropDownLine />
      </div>

    </div>
  );
};

export default PageLayoutToolbar;
