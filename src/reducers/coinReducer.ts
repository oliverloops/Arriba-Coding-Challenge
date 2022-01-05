/* Isolated array for sample annual currency price 
(can be retrived from an API)*/
const annualCurrencyValues: Array<number> = [2851, 3441, 7300, 32840, 42700];

/* Reducer to handle isolated bar chart focus states
and anual currency prices */
function barChartReducer(state: boolean, action: any) {
  switch (action.type) {
    case "barOne":
      return !state;
    case "barTwo":
      return !state;
    case "barThree":
      return !state;
    case "barFour":
      return !state;
    case "barFive":
      return !state;
    default:
      throw new Error();
  }
}

/* Reducer to handle annual currency values */
function annualCurrencyReducer(state: number, action: any) {
  switch (action.type) {
    case "barOne":
      return (state = annualCurrencyValues[0]);
    case "barTwo":
      return (state = annualCurrencyValues[1]);
    case "barThree":
      return (state = annualCurrencyValues[2]);
    case "barFour":
      return (state = annualCurrencyValues[3]);
    case "barFive":
      return (state = annualCurrencyValues[4]);
    default:
      throw new Error();
  }
}

export { barChartReducer, annualCurrencyReducer };
