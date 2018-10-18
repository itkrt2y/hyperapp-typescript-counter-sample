import { h, View } from "hyperapp";

export const Counter: View<State, Actions> = (
  { counter: state }: State,
  { counter: actions }: Actions
) => (
  <div>
    <div>{state.count}</div>
    <button onclick={actions.down}>-</button>
    <button onclick={() => actions.up(2)}>+</button>
    <button onclick={actions.reset}>Reset</button>
  </div>
);
