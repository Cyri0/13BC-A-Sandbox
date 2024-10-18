import { useEffect, useState } from "react"
import DessertCard from "./components/DessertCard"
import { DessertCardProp } from "./components/DessertCard"

function App() {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(fetchDessert => setDesserts(fetchDessert))
  },[])

  return (
  <>
    <section className="desserts">
      { desserts.map(dessert => <DessertCard {...dessert} />) }
    </section>
  </>
  )
}

export default App