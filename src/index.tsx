import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";

import { State, store, initialState } from "./rdx";
import { Counter } from "./counter";

function render() {
  ReactDOM.render(
    <div>
      <h1>Typescript React + Redux subscribe sample</h1>
      <Counter dispatch={store.dispatch.bind(store)} />
      <p>{JSON.stringify(store.getState())}</p>
    </div>,
    document.querySelector("#app")
  );
}

render();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  render();
});
