import React from "react";

import { calculateFib, suffixOf } from "./math";

function NthFith({ count, increment }) {
  // const fibNumber = calculateFib(count);

  const fibNumber = React.useMemo(() => calculateFib(count), [count]);

  return (
    <>
      <h2>Nth Fib</h2>
      <p>
        The <strong>{suffixOf(count)}</strong> number of the fibonnaci sequence
        is <strong>{fibNumber}</strong>
      </p>
      <button onClick={increment}>Next number</button>
    </>
  );
}

// export default React.memo(NthFith, (prevProps, nextProps) => {
//   return prevProps.count === nextProps.count;
// });

// export default React.memo(NthFith);

export default NthFith;
