import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Kliknięto {count} razy</p>
        <button onClick={() => setCount(count + 1)}>Kliknij mnie</button>
        <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <button onClick={() => setCount(count + 5)}>Dodaj 5</button>
        <button onClick={() => setCount(count - 5)}>Odejmij 5</button>
      </div>
    </div>
  );
}
export default Counter;
