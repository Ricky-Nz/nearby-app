import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function (initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, createLogger)
	);

	if(module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}