import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("bg-green-400");

  return (
    <>
     <div
     className={`${color} h-screen w-screen`}
     >
      <div className='bg-gray-100 h-20 w-screen flex justify-center items-center gap-10 '>
        <button className='bg-red-700 h-9 w-14' onClick={()=>setColor("bg-red-700")}>red</button>
        <button className='bg-green-950 h-9 w-14' onClick={()=>setColor("bg-green-950")}>green</button>
        <button className='bg-orange-700 h-9 w-14' onClick={()=>setColor("bg-orange-700")}>orange</button>
        <button className='bg-teal-950 h-9 w-14' onClick={()=>setColor("'bg-teal-950")}>teal</button>
        
      </div>

     </div>
    </>
  );
}

export default App;
