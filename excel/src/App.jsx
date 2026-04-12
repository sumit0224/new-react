import React, { useContext } from 'react'
import Navbar from './components/ui/Navbar'
import Navbar2 from './components/ui/Navbar2'
import Footer from './components/Footer'
import Home from './components/toolbar/Home'
import FunctionBar from './components/FunctionBar'
import InsertBar from './components/toolbar/InsertBar'
import ShareBar from './components/toolbar/ShareBar'
import PageLayoutBar from './components/toolbar/PagelayoutBar'

import { globalContext } from './context/GlobalContext'

import Grid from './components/Grid'

const App = () => {
  const { activeTab } = useContext(globalContext)

  const obj = {
    Home: <Home />,
    Insert: <InsertBar />,
    Share: <ShareBar />,
    Page_Layout: <PageLayoutBar />

  }
  return (
    <>


      <Navbar >
        <Navbar2 />
        <div className='py-2 '>
          {
            obj[activeTab]
          }
          <FunctionBar />
        </div>
      </Navbar>

      <Grid />

      <Footer />

    </>
  )
}

export default App
