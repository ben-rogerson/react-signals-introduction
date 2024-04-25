import { useSignal } from "../hooks/useSignal";
import { INITIAL_COUNT, counterOneState, counterTwoState } from "../state";

export const Controls = () => {
  const [counterOne, setCounterOne] = useSignal(counterOneState);
  const [counterTwo, setCounterTwo] = useSignal(counterTwoState);

  return (
    <>
      <button
        onClick={() => {
          setCounterOne(counterOne + 1);
        }}
      >
        Increment 1
      </button>
      <button
        onClick={() => {
          setCounterTwo(counterTwo + 1);
        }}
      >
        Increment 2
      </button>
      <button
        onClick={() => {
          setCounterOne(INITIAL_COUNT);
          setCounterTwo(INITIAL_COUNT);
        }}
      >
        Reset
      </button>
    </>
  );
};
