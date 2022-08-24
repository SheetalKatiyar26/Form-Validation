import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueIsTouched;

  const addInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };

  return {
    value: enteredValue,
    enteredValueIsTouched,
    hasError,
    enteredValueIsValid,
    addInputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
