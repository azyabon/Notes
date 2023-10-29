import {applyMiddleware, combineReducers, createStore} from 'redux';
import notes from './notes';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  notes,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
