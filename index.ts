import { app } from "hyperapp";
import { state } from "./src/states";
import { actions } from "./src/actions";
import { view } from "./src/views";

app<State, Actions>(state, actions, view, document.body);
