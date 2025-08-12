import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

   const [range,setrange]=useState(8)
    const [numb,addNumb]=useState(false)
    const [symb,addSymb]=useState(false)
    const[password,setpassword]=useState("")

    const passgenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numb==true){
          str+="1234567890"
        }
        if(symb==true){
          str+="!@#$%^&*()"
        }
        for(let i=0;i<range;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setpassword(pass)
        
    }, [range, numb, symb])


    useEffect(passgenerator,[range, numb, symb])

    const copy= ()=>{
      window.navigator.clipboard.writeText(password)

    }

  return (

    <div className="bg-slate-800 h-screen w-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl text-white  decoration-solid">
        password generator 
      </h1>

      <div className="bg-slate-400 h-40 w-[420px] rounded-md">
        <div className="flex justify-center">
          <input
          value={password}
            type="text"
            className="h-12 w-[350px] my-5 text-3xl text-green-950"
          />
          <button className="bg-blue-700 h-12 w-12 my-5 rounded-r-md" onClick={copy}>copy</button>
        </div>

        <div className="flex justify-center gap-1">
          <label htmlFor="slider">length:{range}</label>
          <input type="range" min={0} max={15} className="mx-2" id='slider' onChange={(e)=>{
            setrange(Number(e.target.value))
          }} />
          <label htmlFor="numb">number:</label>
          <input type="checkbox"  id="numb" className="mr-6" onChange={()=>{
            addNumb(prev=>!prev)
          }}/>
          <label htmlFor="symb">symbol:</label>
          <input type="checkbox"   id="symb" onChange={()=>{
            addSymb(prev=>!prev)
          }}/>
        </div>
      </div>
    </div>
    
  )
}

export default App