import { Signal } from "signal-polyfill";

export const INITIAL_COUNT = 0;

// A simple state to keep track of a couple counters
export const counterOneState = new Signal.State(INITIAL_COUNT);
export const counterTwoState = new Signal.State(INITIAL_COUNT);

// A computed signal that tallies both counters
export const talliedCounterState = new Signal.Computed(
  () => counterOneState.get() + counterTwoState.get(),
);
