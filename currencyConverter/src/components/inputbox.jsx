function InputBox1({
  dest,
  selectCurrency,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  isDisabled = false
}) {
  return (
    <div className="bg-gray-400 rounded-xl p-2  my-4">
      <div>
        <h1 className='m-2 font-semibold'>{dest}</h1>
      </div>

      <div className='flex'>
        <input
          className='h-[60px] w-[470px] ml-4 mb-12 rounded-l-xl px-3'
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={isDisabled}
        />

        <select
          className='bg-sky-700 text-white rounded-r-xl h-[60px] px-2'
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox1
