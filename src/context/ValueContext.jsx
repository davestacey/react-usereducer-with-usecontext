import React, { createContext, useReducer } from "react";

const initialState = {
  value: "Hello World!!!"
};

const reducer = (state = initialState, action) => {
  let { value } = state;

  switch (action.type) {
    case "SET_VALUE":
      value = action.payload;
      break;
    case "CLEAR_VALUE":
      value = "";
      break;
    default:
      throw new Error("Not valid type");
  }

  return { value };
};

export const ValueContext = createContext({
  state: initialState,
  dispatch: null
});

export const ValueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ValueContext.Provider value={{ state, dispatch }}>
      {children}
    </ValueContext.Provider>
  );
};
