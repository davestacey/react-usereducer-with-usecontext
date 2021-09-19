import React, { useContext } from "react";
import { ValueContext } from "../context/ValueContext";

const Input = () => {
  const {
    state: { value },
    dispatch
  } = useContext(ValueContext);

  const handleValue = (event) => {
    dispatch({ type: "SET_VALUE", payload: event.target.value });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_VALUE" });
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleValue} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Input;
