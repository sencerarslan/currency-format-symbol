export const CurrencyFormat = ({amount = '0.00', currency = false, useGrouping=true, currencyDisplay='code', minDigit = 0, maxDigit = 2, locale = 'en-US', currencyPosition = 'end'}) => {

  let amountNumber = Number(amount);

  if (maxDigit === 0) {
    amountNumber = Math.trunc(amountNumber);
  }

  let formattedNumber = amountNumber.toLocaleString(locale, {
    minimumFractionDigits: minDigit,
    maximumFractionDigits: maxDigit,
    style: currency ? "currency" : "decimal",
    currencyDisplay: currency ? currencyDisplay : undefined,
    currency: currency ? currency : undefined,
    useGrouping: useGrouping,
  });


  if(currencyPosition === 'end'){
    if(currencyDisplay === 'code'){
      formattedNumber = formattedNumber.split('\u00A0').reverse().join(' ');
    }

    if(currencyDisplay === 'symbol'){
      formattedNumber = formattedNumber.substring(1) + formattedNumber.charAt(0);
    }
  }


  return formattedNumber;
}


