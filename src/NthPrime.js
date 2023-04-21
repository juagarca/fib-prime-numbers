import React from "react";

import { calculatePrime, suffixOf } from "./math";

function NthPrime({ count, increment }) {
  // const primeNumber = calculatePrime(count);

  const primeNumber = React.useMemo(() => calculatePrime(count), [count]);

  return (
    <>
      <h2>Nth Prime</h2>
      <p>
        The <strong>{suffixOf(count)}</strong> number of the prime sequence is{" "}
        <strong>{primeNumber}</strong>
      </p>
      <button onClick={increment}>Next number</button>
    </>
  );
}

// export default React.memo(NthPrime, (prevProps, nextProps) => {
//   return prevProps.count === nextProps.count;
// });

// export default React.memo(NthPrime);

export default NthPrime;
