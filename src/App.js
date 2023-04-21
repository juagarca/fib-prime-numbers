import React from "react";

import NthFith from "./NthFib";
import NthPrime from "./NthPrime";

import "./App.css";

function App() {
  const [fibCount, setFibCount] = React.useState(1);
  const [primeCount, setPrimeCount] = React.useState(1);

  const handleAdd = () => {
    setFibCount((count) => count + 10);
    setPrimeCount((count) => count + 10);
  };

  const handleReset = () => {
    setFibCount(1);
    setPrimeCount(1);
  };

  // const incrementFib = React.useCallback(
  //   () => setFibCount((count) => count + 1),
  //   []
  // );

  // const incrementPrime = React.useCallback(
  //   () => setPrimeCount((count) => count + 1),
  //   []
  // );

  const incrementFib = () => {
    setFibCount((count) => count + 1);
  };

  const incrementPrime = () => {
    setPrimeCount((count) => count + 1);
  };

  return (
    <div className="container">
      <button onClick={handleAdd}>Add 10</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <NthFith count={fibCount} increment={incrementFib}></NthFith>
      <hr />
      <NthPrime count={primeCount} increment={incrementPrime}></NthPrime>
      <hr />
    </div>
  );
}

export default App;
