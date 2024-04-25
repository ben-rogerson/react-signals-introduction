# React signals introduction

This repo is a quick introduction to signals using [signal-polyfill](https://www.npmjs.com/package/signal-polyfill) - a polyfill for the `Signal` API.

The [TC39 signals proposal](https://github.com/tc39/proposal-signals) is still being worked on and so things may change - but we can still see how things may end up looking.

So far it’s looking good and is fairly easy to work with - I only wish there would be method exposed to reset signal state back to the initial value.
This polyfill only exposes a `.get()` and `.set()` method but you can pass the initial value (eg: `counterState.set(INITIAL_VALUE)`) which does the same thing.

[👉 Check the demo](https://react-signals-introduction.vercel.app/)
