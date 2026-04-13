import { IoShareSocialOutline, IoLinkOutline } from "react-icons/io5";
import { TbTableShare } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

const ShareToolbar = () => {
  return (
    <div className="w-[98vw] bg-white rounded-lg border-b px-3 py-1 flex items-center justify-between">

      {/* Left side */}
      <div className="flex items-center gap-3">

        {/* Share */}
        <div className="share-item">
          <IoShareSocialOutline className="icon-sm" />
          <span>Share</span>
        </div>

        {/* Copy Link */}
        <div className="share-item">
          <IoLinkOutline className="icon-sm" />
          <span>Copy Link</span>
        </div>

        {/* Link to this Sheet */}
        <div className="share-item">
          <TbTableShare className="icon-sm" />
          <span>Link to this Sheet</span>
        </div>

      </div>

      {/* Right side dropdown */}
      <div className="dropdown-btn">
        <RiArrowDropDownLine />
      </div>

    </div>
  );
};

export default ShareToolbar;
