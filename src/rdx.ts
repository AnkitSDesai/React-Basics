import * as redux from 'redux';

export interface State {
  counter: number;
  actionCount: number;
}

export const initialState: State = {
  counter: 0,
  actionCount: 0
};

/// =============== Actions

export function addToCounter(addNumber: number) {
  return {
    type: 'ADD_TO_COUNTER',
    payload: addNumber
  };
}

export function subFromCounter(subNumber: number) {
  return {
    type: 'SUB_FROM_COUNTER',
    payload: subNumber
  };
}

/// =============== Reducers

export function reduceCounter(prevCounter = initialState.counter, action: redux.AnyAction) {
  console.log('reduceCounter ', action.type);
  switch (action.type) {
    case 'ADD_TO_COUNTER':
      return prevCounter + action.payload;
    case 'SUB_FROM_COUNTER':
      return prevCounter - action.payload;
    default:
      return prevCounter;
  }
}

export function reduceActionCount(prevCount = initialState.actionCount, action: redux.AnyAction) {
  console.log('reduceActionCount ', action.type);
  switch (action.type) {
    case 'ADD_TO_COUNTER':
    case 'SUB_FROM_COUNTER':
      return prevCount + 1;
    default:
      return prevCount;
  }
}

export const reduce = redux.combineReducers<State>({
  counter: reduceCounter,
  actionCount: reduceActionCount
});

// reducing the current state to get the next state!
// console.log(reduce(initialState, addToCounter(12));

// ================ store

export const store = redux.createStore(reduce);
