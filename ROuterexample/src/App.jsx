import { useState } from 'react'
import Footer from './componaents/Footer'
import Header from './componaents/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <h1 className=' bg-green-700' >this is sample</h1>
   <Footer/>
   </>
  )
}

export default App
