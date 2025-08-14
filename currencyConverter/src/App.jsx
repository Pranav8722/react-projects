import { useState } from 'react'
import './App.css'
import InputBox1 from './components/inputbox.jsx'
import currencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfos = currencyInfo(from)
  const options = Object.keys(currencyInfos)

  const convert = () => {
    if (currencyInfos[to]) {
      setConvertedAmount(amount * currencyInfos[to])
    }
  }

  return (  <div className="bg-slate-950 flex flex-col justify-center items-center h-lvh w-screen " >
  

      <div className="h-auto w-auto bg-sky-600 bg-transparent border border-s-white rounded-xl p-6 m-6">
      <h1 className='text-4xl font-semibold text-white text-center'>Currency Converter</h1>
        <InputBox1 
          dest={"From:"}
          amount={amount}
          currencyOptions={options}
          onAmountChange={(val) => setAmount(val)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />

        <InputBox1 
          dest={"To:"}
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          isDisabled={true}
        />

        <button 
          onClick={convert} 
          className='w-full bg-gray-900 text-white px-4 py-3 mt-4 rounded-xl hover:bg-black border border-s-violet-50'
        >
          Convert
        </button>
      </div>
    </div>
  )
}

export default App
