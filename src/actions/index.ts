import { ActionsType } from "hyperapp";
import { counterActions } from "../actions/counter";

export const actions: ActionsType<State, Actions> = {
  counter: counterActions
};
