import {combineReducers} from 'redux';

import {reducerInitial} from './reducerInitial';
import {reducerSwitch} from './reducerSwitch';

const appReducer = combineReducers({
    reducerInitial: reducerInitial,
    reducerSwitch: reducerSwitch,
});
export default appReducer;