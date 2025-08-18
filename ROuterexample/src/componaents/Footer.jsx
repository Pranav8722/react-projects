import React from 'react'

function Footer() {
  return (
   <div className='h-44 w-full flex items-center bg-gray-200 border border-slate-950 justify-between absolute bottom-0 '>
        <div className="flex text-3xl items-center  font-semibold m-6">
        <h1><span className='text-orange-700'>My</span>Site <sup className='text-blue-400'>®</sup></h1>
        </div>

    <div className="flex gap-24 ">
        <div className="m-12">
            <ul>
                <li className='font-semibold '>RESOURCES</li>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
        <div className="m-12">
            <ul>
                <li className='font-semibold '>FOLLOW US</li>
                <li>Git Hub</li>
                <li>Discord</li>
            </ul>
        </div>
        <div className="m-12">
            <ul>
                <li className='font-semibold '>LEAGAL</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>

    </div>
    </div>
  )
}

export default Footer
