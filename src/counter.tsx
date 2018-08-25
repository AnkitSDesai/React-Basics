import * as React from 'react';
import { AnyAction } from 'redux';

import { addToCounter, subFromCounter } from './rdx';

interface CounterProps {
  dispatch: (action: AnyAction) => void;
}

export class Counter extends React.Component<CounterProps> {
  handleAdd = () => {
    this.props.dispatch(addToCounter(10));
  };
  handleSub = () => {
    this.props.dispatch(subFromCounter(7));
  };

  render() {
    return (
      <p>
        <button key="add" onClick={this.handleAdd}>
          Add
        </button>
        <button key="sub" onClick={this.handleSub}>
          Sub
        </button>
      </p>
    );
  }
}
