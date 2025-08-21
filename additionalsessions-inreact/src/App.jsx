import { memo, useState } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button type="button" onClick={() => setCount1(count1 + 1)}>
        Increment Count by 1
      </button>
      <button type="button" onClick={() => setCount2(count2 + 1)}>
        Increment Count by 2
      </button>

      <Counter1 count={count1}></Counter1>
      <Counter2 count={count2}></Counter2>
    </>
  );
}

// memoize

const Counter1 = memo(({ count }) => {
  console.log("counter 1 redered");
  return <div>Count1 : {count}</div>;
});
const Counter2 = memo(({ count }) => {
  console.log("counter 2 redered");
  return <div>Count2 : {count}</div>;
});

//diff use concepts
//usestate
//useMemo - only changed when the dependency or within that component things changed
//usecallback
//use Reducer (dispatch)
// React.memo
//Use Reference (wont rerender)
