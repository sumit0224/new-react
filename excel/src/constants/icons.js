import { LuUndo2, LuPaintbrushVertical, LuWrapText, LuTableCellsMerge } from 'react-icons/lu';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoClipboardOutline } from 'react-icons/io5';
import { MdBorderAll } from 'react-icons/md';
import { TfiPaintBucket } from 'react-icons/tfi';
import { BsThreeDots, BsCurrencyEuro, BsCurrencyDollar } from 'react-icons/bs';
import { FaAlignLeft, FaAlignRight } from 'react-icons/fa6';
import { FaAlignCenter, FaAlignJustify } from 'react-icons/fa';
import { TiArrowRight } from 'react-icons/ti';
import { TbArrowNarrowLeft, TbSum } from 'react-icons/tb';
import { BiFilterAlt } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { CgDisplayGrid } from 'react-icons/cg';

const Icons = {
  undo: LuUndo2,
  dropdown: RiArrowDropDownLine,
  clipboard: IoClipboardOutline,
  paintBrush: LuPaintbrushVertical,
  borderAll: MdBorderAll,
  fillColor: TfiPaintBucket,
  more: BsThreeDots,
  alignLeft: FaAlignLeft,
  alignRight: FaAlignRight,
  alignCenter: FaAlignCenter,
  alignJustify: FaAlignJustify,
  wrapText: LuWrapText,
  euro: BsCurrencyEuro,
  dollar: BsCurrencyDollar,
  mergeCells: LuTableCellsMerge,
  arrowRight: TiArrowRight,
  arrowLeft: TbArrowNarrowLeft,
  sum: TbSum,
  filter: BiFilterAlt,
  search: HiOutlineSearch,
  grid: CgDisplayGrid,
};

export default Icons;
