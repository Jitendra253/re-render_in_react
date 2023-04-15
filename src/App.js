import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);

  const update = (e) => {
    console.log(`infunction call , before state update ${count}`);
    setCount(count + e);
    console.log(`infunction call after state update ${count}`);
  };

  useEffect(() => {
    console.log("after renddring", count);
  });

  console.log("before rendring", count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => update(+1)}>+</button>
      <button onClick={() => update(-1)}>-</button>
    </div>
  );
};
export default App;
