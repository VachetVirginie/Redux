import { createStore, applyMiddleware, compose } from 'redux';
import counter from './reducers/counter';

export default createStore(counter);