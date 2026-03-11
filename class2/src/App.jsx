import Navbar from "./component/Navbar"
function App() {

  const linkList = [{ link1: "home", href: "#", link2: "about us", link3: "contact", link4: "login" }, { link1: "support", href: "#", link2: "help us", link3: "connect", link4: "sign up" }]
  return (
    <>
      <div>
        {
          linkList.map((item, index) => {
            return <Navbar key={index} link1={item.link1} href={item.href} link2={item.link2} link3={item.link3} link4={item.link4} />
          })
        }
      </div>


    </>
  )
}

export default App