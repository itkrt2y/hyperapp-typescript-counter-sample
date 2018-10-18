import { h, View } from "hyperapp";
import { Counter } from "./counter";

export const view: View<State, Actions> = () => (
  <div>
    <h1>Counter</h1>
    {Counter}
  </div>
);
