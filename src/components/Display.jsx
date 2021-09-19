import React, { useContext } from "react";
import { ValueContext } from "../context/ValueContext";

const Display = () => {
  const {
    state: { value }
  } = useContext(ValueContext);

  return <h1>{value}</h1>;
};

export default Display;
