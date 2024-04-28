import { Signal } from "signal-polyfill";
import { useSyncExternalStore } from "react";

type UseSignal = <T>(signal: Signal.State<T>) => [T, (val: T) => void];

/**
 * Hook that accepts a signal.
 * A signal is a reactive value that can be read and updated.
 * @example
 * ```tsx
 * const counterState = new Signal.State(0);
 * const [counter, setCounter] = useSignal(counterState);
 * ```
 */
export const useSignal: UseSignal = (signal) => {
  let signalValue = signal.get();

  const value = useSyncExternalStore(
    (cb) =>
      effect(() => {
        signalValue = signal.get();
        cb();
      }),
    () => signalValue,
    () => signalValue,
  );

  return [value, (val) => signal.set(val)];
};

type UseComputed = <T>(signal: Signal.Computed<T>) => T;

/**
 * Hook that accepts a computed signal.
 * A computed signal is derived from another signal and
 * auto-updates when the original signal changes.
 * @example
 * ```tsx
 * // Setup
 * const counterState = new Signal.State(0);
 * const [counter, setCounter] = useSignal(counterState);
 * // Usage
 * const doubleCounter = new Signal.Computed(() => counter * 2);
 * const doubledCounter = useComputed(doubleCounter);
 * ```
 */
export const useComputed: UseComputed = (signal) => {
  let value = signal.get();
  return useSyncExternalStore(
    (cb) =>
      effect(() => {
        value = signal.get();
        cb();
      }),
    () => value,
    () => value,
  );
};

/**
 * Signal watcher and effect
 */

let needsEnqueue = true;

const watcher = new Signal.subtle.Watcher(() => {
  if (needsEnqueue) {
    needsEnqueue = false;
    queueMicrotask(processPending);
  }
});

const processPending = () => {
  needsEnqueue = true;

  for (const computedSignal of watcher.getPending()) {
    computedSignal.get();
  }

  watcher.watch();
};

const effect = (callback: () => void) => {
  let cleanup: (() => void) | void;

  const computed = new Signal.Computed(() => {
    cleanup?.();
    cleanup = callback();
  });

  watcher.watch(computed);
  computed.get();

  return () => {
    watcher.unwatch(computed);
    cleanup?.();
  };
};
