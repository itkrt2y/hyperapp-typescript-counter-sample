interface Actions {
  counter: CounterActions;
}

interface CounterActions {
  reset(): State;
  down(): State;
  up(value: number): State;
}
