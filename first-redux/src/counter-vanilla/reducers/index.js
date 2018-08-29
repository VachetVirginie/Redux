import { combineReducers } from 'redux';
import increment from './increment';
import counter from './counter';

export default combineReducers({increment, counter});