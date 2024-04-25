import { useSignal } from "../hooks/useSignal";
import { INITIAL_COUNT, counterState, displayState } from "../state";

export const Controls = () => {
  const [counter, setCounter] = useSignal(counterState);
  const [isDisplayed, setIsDisplayed] = useSignal(displayState);

  return (
    <>
      <button
        onClick={() => {
          setIsDisplayed(!isDisplayed);
        }}
      >
        {isDisplayed ? "Show" : "Hide"}
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment ({counter})
      </button>
      <button
        onClick={() => {
          setCounter(INITIAL_COUNT);
        }}
      >
        Reset
      </button>
    </>
  );
};
