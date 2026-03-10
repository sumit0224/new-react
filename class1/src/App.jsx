import Navbar from './component/Navbar'
import Card from './component/Card'

function App() {

  const data = [
    {
      img: "https://imgs.search.brave.com/G2wChg9jboZmi8u4c6mFX6SK9HaDxaVrGMeoMkJFODk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9yaXBl/LXJlZC1hcHBsZS1m/cnVpdHMtNDE5MDM5/NTgzLmpwZw",
      name: "apple",
      para: "apple color is red",
      alt: "apple"
    },
    {
      img: "https://imgs.search.brave.com/TWhDJ7tDTdbfiPx12RwDmGa6JbfeII48I8dYKTGRp7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg2/MTA0NzEwL3Bob3Rv/L21hbmdvLWZydWl0/LWFuZC1tYW5nby1z/bGljZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPThKUGdj/S1hoMHNxaFRQSnBa/YXRUclBZbjgySmMy/UURYNU5WOEs1Y1FW/TFk9",
      name: "mango",
      para: "mango color is yellow",
      alt: "mango"
    },
    {
      img: "https://imgs.search.brave.com/_LD3bT9wiCDm1q8HXJ2UO_U3OfC4_2gm2RRDYN1PBCg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/MTI5LzEwNC9zbWFs/bC9vcmFuZ2UtZnJ1/aXQtd2l0aC1ncmVl/bi1sZWFmLW9uLW9y/YW5nZS1iYWNrZ3Jv/dW5kLXBob3RvLmpw/Zw",
      name: "orange",
      para: "orange color is orange",
      alt: "orange"
    }
  ]

  return (
    <>
      <Navbar />
    {
      data.map((item, index)=>{
        return <Card 
        img={item.img} 
        name={item.name} 
        alt={item.alt} 
        para={item.para} 
        />
      })
    }
   

    </>
  )
}

export default App