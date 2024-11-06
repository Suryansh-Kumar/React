import { useState } from 'react'
import { Header, Home, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Home/>
      <Footer/>
    </>
  )
}

export default App
