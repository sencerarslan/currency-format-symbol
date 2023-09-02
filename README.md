# Currency Format Symbol
[![NPM](https://img.shields.io/npm/v/currency-format-symbol.svg)](https://www.npmjs.com/package/currency-format-symbol) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install currency-format-symbol
```
```bash
yarn add currency-format-symbol
```
## Parameters

- `amount` (Default: '0.00'): The numeric value to be formatted.
- `currency` (Default: false): Specifies whether currency formatting should be applied.
- `useGrouping` (Default: true): Indicates whether to use grouping separators.
- `currencyDisplay` (Default: 'code'): Determines the currency display format ('code' or 'symbol').
- `minDigit` (Default: 0): The minimum number of decimal places.
- `maxDigit` (Default: 2): The maximum number of decimal places.
- `locale` (Default: 'en-US'): The locale used for formatting.
- `currencyPosition` (Default: 'end'): Specifies where the currency symbol or code should appear ('start' or 'end').

## Return Value

- A string representing the formatted currency value.


## Usage Example

```jsx
import { CurrencyFormat } from 'currency-format-symbol'
const App = () => {
  return <>
    <CurrencyFormat amount="1234567.89" />
    <CurrencyFormat amount="1234567.89" locale="tr-TR" currency="TRY" currencyDisplay="symbol"/>
  </>
}
export default App
```

## License

MIT © [sencerarslan](https://github.com/sencerarslan)
