import { useContext } from 'react';
import { FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { LuPencil } from 'react-icons/lu';
import { PiPlugsConnectedLight } from 'react-icons/pi';
import { GlobalContext } from '../../contexts/GlobalContext';

const tabs = [
  'File',
  'Home',
  'Insert',
  'Share',
  'Page Layout',
  'Formulas',
  'Data',
  'Review',
  'Help',
  'Draw',
];

const RibbonTabs = () => {
  const { activeTab, setActiveTab, setIsFileDropdownOpen } = useContext(GlobalContext);

  const handleTabClick = (tab) => {
    if (tab === 'File') {
      setIsFileDropdownOpen((prevOpen) => !prevOpen);
      return;
    }

    setActiveTab(tab);
  };

  return (
    <div className="w-full flex justify-between items-center bg-[#f3f2f1] border-b border-[#e1dfdd]">
      <div className="flex items-center px-3 text-[13px]">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`tab-item ${activeTab === tab ? 'tab-active' : ''}`}
          >
            {tab}
            {activeTab === tab && <div className="tab-underline" />}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1 px-2 text-[12px] text-[#605e5c]">
        <ToolbarActionButton icon={FaRegCommentAlt} label="Comments" />
        <ToolbarActionButton icon={PiPlugsConnectedLight} label="Catch Up" />
        <ToolbarActionButton icon={LuPencil} label="Editing" />

        <div className="toolbar-btn-green">
          <FaRegShareSquare />
          <span>Share</span>
          <RiArrowDropDownLine className="text-[18px]" />
        </div>
      </div>
    </div>
  );
};

const ToolbarActionButton = ({ icon: Icon, label }) => (
  <div className="toolbar-btn">
    <Icon />
    <span>{label}</span>
    <RiArrowDropDownLine className="text-[18px]" />
  </div>
);

export default RibbonTabs;
