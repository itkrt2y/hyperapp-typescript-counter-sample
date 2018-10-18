import { ActionsType } from "hyperapp";

export const counterActions: ActionsType<CounterState, CounterActions> = {
  reset: () => () => ({ count: 0 }),
  down: () => state => ({ count: state.count > 0 ? state.count - 1 : 0 }),
  up: (value: number) => state => ({ count: state.count + value })
};
