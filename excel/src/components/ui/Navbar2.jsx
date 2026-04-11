import React, { useContext } from "react";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { PiPlugsConnectedLight } from "react-icons/pi";
import { globalContext } from "../../context/GlobalContext";

const tabs = [
  "File",
  "Home",
  "Insert",
  "Share",
  "Page Layout",
  "Formulas",
  "Data",
  "Review",
  "Help",
  "Draw",
];

const Navbar2 = () => {
  const { activeTab, setActiveTab, dropDown, setDropDown } =
    useContext(globalContext);

  const handleTabClick = (tab) => {
    if (tab === "File") {
      setDropDown((prev) => !prev);
      console.log(dropDown)
      return;
    }
    setActiveTab(tab);

  };

  return (
    <div className="w-full flex justify-between items-center bg-[#f3f2f1] border-b border-[#e1dfdd]">

      {/* LEFT TABS */}
      <div className="flex items-center px-3 text-[13px]">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`tab-item ${
              activeTab === tab ? "tab-active" : ""
            }`}
          >
            {tab}

            {activeTab === tab && <div className="tab-underline" />}
          </div>
        ))}
      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center gap-1 px-2 text-[12px] text-[#605e5c]">

        <ToolbarBtn icon={FaRegCommentAlt} label="Comments" />
        <ToolbarBtn icon={PiPlugsConnectedLight} label="Catch Up" />
        <ToolbarBtn icon={LuPencil} label="Editing" />

        {/* Share Button */}
        <div className="toolbar-btn-green">
          <FaRegShareSquare />
          <span>Share</span>
          <RiArrowDropDownLine className="text-[18px]" />
        </div>

      </div>
    </div>
  );
};

export default Navbar2;

/* Reusable Button */
const ToolbarBtn = ({ icon: Icon, label }) => (
  <div className="toolbar-btn">
    <Icon />
    <span>{label}</span>
    <RiArrowDropDownLine className="text-[18px]" />
  </div>
);