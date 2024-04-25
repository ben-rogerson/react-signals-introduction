import { useComputed, useSignal } from "../hooks/useSignal";
import { counterState, displayState, doubleCounterState } from "../state";

export const Status = () => {
  const [counter] = useSignal(counterState);
  const doubledCounter = useComputed(doubleCounterState);

  return (
    <>
      <div>Counter is {counter}</div>
      <div>Double is {doubledCounter}</div>
    </>
  );
};

export const SignalTest = () => {
  const [isDisplayed] = useSignal(displayState);

  if (!isDisplayed)
    return (
      <>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </>
    );

  return <Status />;
};
