import {combineReducers, createStore} from 'redux';
import notes from './notes';

const rootReducer = combineReducers({
  notes,
});

export const store = createStore(rootReducer);
