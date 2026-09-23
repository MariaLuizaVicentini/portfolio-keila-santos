import { useState } from "react";

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

export function Counter({ initialValue = 0, min = -Infinity, max = Infinity }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => Math.min(prev + 1, max));
  const decrement = () => setCount((prev) => Math.max(prev - 1, min));

  return (
    <div>
      <button onClick={decrement} aria-label="Decrementar" disabled={count <= min}>
        -
      </button>
      <span data-testid="count">{count}</span>
      <button onClick={increment} aria-label="Incrementar" disabled={count >= max}>
        +
      </button>
    </div>
  );
}
