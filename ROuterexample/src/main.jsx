import { StrictMode  } from 'react'
import { createRoot } from "react-dom/client";
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './componaents/Layout'
import About from './componaents/About'
import Home from './componaents/Home'
import Contact from './componaents/Contact'
import './index.css'


const router=createBrowserRouter(
createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
    <Route path='/About' element={<About/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
   </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
