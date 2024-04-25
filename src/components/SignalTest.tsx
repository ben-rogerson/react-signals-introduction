import { useComputed, useSignal } from "../hooks/useSignal";
import {
  counterOneState,
  counterTwoState,
  talliedCounterState,
} from "../state";

export const SignalTest = () => {
  const [counterOne] = useSignal(counterOneState);
  const [counterTwo] = useSignal(counterTwoState);
  const talliedCounter = useComputed(talliedCounterState);

  return (
    <>
      <div>Counter 1 = {counterOne}</div>
      <div>Counter 2 = {counterTwo}</div>
      <div>Total is {talliedCounter}</div>
    </>
  );
};
