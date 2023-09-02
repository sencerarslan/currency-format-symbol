import React from 'react'
import { CurrencyFormat } from 'currency-format-symbol'

const App = () => {
  return <>
  <CurrencyFormat amount="1234567.89" />
  <CurrencyFormat amount="1234567.89" locale="tr-TR" currency="TRY" currencyDisplay="symbol"/>
  </>
}

export default App

