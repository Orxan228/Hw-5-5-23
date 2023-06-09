import { useState } from 'react'
import './App.css'
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"
import Footer from "./Components/Footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Content />
    <Footer />
    </>
  )
}

export default App
