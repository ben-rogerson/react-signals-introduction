import { Signal } from "signal-polyfill";

export const INITIAL_COUNT = 0;

// Some state to toggle the display of the Status component
export const displayState = new Signal.State(true);

// A simple state to keep track of a counter
export const counterState = new Signal.State(INITIAL_COUNT);

// A computed signal that doubles the counter
export const doubleCounterState = new Signal.Computed(
  () => counterState.get() * 2,
);
