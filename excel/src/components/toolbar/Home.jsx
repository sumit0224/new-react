import Icons from "../../assets/icons";

const Home = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm py-1 border-b px-3  flex items-center gap-2 overflow-x-auto">

      {/* Undo */}
      <div className="tool-btn">
        <Icons.undo />
      </div>

      {/* Clipboard */}
      <div className="tool-btn">
        <Icons.clipboard />
      </div>

      {/* Paint */}
      <div className="tool-btn">
        <Icons.paintBrush />
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Font Family */}
      <div className="dropdown-box w-[160px]">
        <span>Calibri (Body)</span>
        <Icons.dropdown />
      </div>

      {/* Font Size */}
      <div className="dropdown-box w-[70px]">
        <span>11</span>
        <Icons.dropdown />
      </div>

      {/* Bold */}
      <div className="tool-btn font-bold">B</div>

      {/* Border */}
      <div className="tool-btn">
        <Icons.borderAll />
      </div>

      {/* Fill Color */}
      <div className="tool-btn flex items-center gap-1">
        <Icons.fillColor />
        <span className="color-box bg-yellow-400"></span>
      </div>

      {/* Text Color */}
      <div className="tool-btn flex items-center gap-1">
        <span className="font-bold">A</span>
        <span className="color-box bg-red-500"></span>
      </div>

      {/* More */}
      <div className="tool-btn">
        <Icons.more />
      </div>

      <div className="divider" />

      {/* Alignment */}
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

      {/* Number Format */}
      <div className="dropdown-box w-[120px]">
        <span>General</span>
        <Icons.dropdown />
      </div>

      {/* Currency */}
      <div className="tool-btn">
        <Icons.dollar />
      </div>
      <div className="tool-btn">
        <Icons.euro />
      </div>

      {/* Sum */}
      <div className="tool-btn">
        <Icons.sum />
      </div>

      {/* Search */}
      <div className="tool-btn">
        <Icons.search />
      </div>

      {/* Grid */}
      <div className="tool-btn">
        <Icons.grid />
      </div>

    </div>
  );
};

export default Home;