import { NavLink } from "react-router-dom"

function Header() {
  return (
   
      <header className='h-20 w-screen flex items-center bg-gray-200 border border-slate-950 justify-between '>
        <div className="flex text-3xl items-center  font-semibold m-6">
        <h1><span className='text-orange-500'>My</span>Site <sup className='text-blue-400'>®</sup></h1>
        </div>

        <div className=" text-l cursor-pointer ">
            <ul className='flex justify-center gap-4 '>
                <li ><NavLink to="/Home" className={({ isActive })=>
                    isActive?"text-orange-600":"text-gray-600"
                }>Home</NavLink></li>
                
                <li ><NavLink to="/About" className={({ isActive })=>
                    isActive?"text-orange-600":"text-gray-600"
                }>About</NavLink></li>
                
                <li ><NavLink to="/Contact" className={({ isActive })=>
                    isActive?"text-orange-600":"text-gray-600"
                }>Contact</NavLink></li>
                
            </ul>
        </div>

        <div className="flex justify-center items-center m-6 gap-4 cursor-pointer">
            <ul><li>Log in</li></ul>
            <button className='h-10  w-24  rounded-xl text-white bg-orange-800 border border-black'>Get Started</button>
        </div>

      </header>
    
  )
}

export default Header
