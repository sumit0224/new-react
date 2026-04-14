import { useContext } from 'react';
import TopNavbar from '../components/layout/TopNavbar';
import RibbonTabs from '../components/layout/RibbonTabs';
import HomeToolbar from '../components/toolbar/HomeToolbar';
import InsertToolbar from '../components/toolbar/InsertToolbar';
import ShareToolbar from '../components/toolbar/ShareToolbar';
import PageLayoutToolbar from '../components/toolbar/PageLayoutToolbar';
import FormulaBar from '../components/spreadsheet/FormulaBar';
import Grid from '../components/spreadsheet/Grid';
import WorkbookFooter from '../components/spreadsheet/WorkbookFooter';
import { GlobalContext } from '../contexts/GlobalContext';

const App = () => {
  const { activeTab } = useContext(GlobalContext);

  const toolbarByTab = {
    Home: <HomeToolbar />,
    Insert: <InsertToolbar />,
    Share: <ShareToolbar />,
    'Page Layout': <PageLayoutToolbar />,
  };

  return (
    <>
      <TopNavbar>
        <RibbonTabs />
        <div className="py-2">{toolbarByTab[activeTab] ?? <HomeToolbar />}</div>
        
      </TopNavbar>
      <FormulaBar />
      <Grid />
      <WorkbookFooter />
    </>
  );
};

export default App;
