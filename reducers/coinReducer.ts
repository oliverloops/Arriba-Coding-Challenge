/* random generated quantity to deposit/withdraw
 added for testing purposes*/
const randomValue: number = Math.random();

function coinReducer(state: number, action) {
  switch (action.type) {
    case "deposit":
      return (state += randomValue);
    case "withdraw":
      if (state >= 0) {
        return (state -= randomValue);
      } else {
        return state;
      }
    default:
      throw new Error();
  }
}

export { coinReducer };
