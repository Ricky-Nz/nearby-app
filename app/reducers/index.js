import { combineReducers } from 'redux';
import orders from './orders';
import status from './status';

const rootReducer = combineReducers({
	orders,
	status
});

export default rootReducer;