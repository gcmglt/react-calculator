import { ACTIONS } from "./App";

// pulsanti con numeri e punto della calcolatrice
const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  );
};

export default DigitButton;
