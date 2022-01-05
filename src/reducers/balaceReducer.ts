/* random generated quantity to deposit/withdraw
 added for testing purposes*/
const randomQty: number = Math.random() * 10 + 3;

function balanceReducer(state: number, action: any) {
  switch (action.type) {
    case "deposit":
      return (state += randomQty);
    case "withdraw":
      if (state >= 0) {
        return (state -= randomQty);
      } else {
        return state;
      }
    default:
      throw new Error();
  }
}

export { balanceReducer };
