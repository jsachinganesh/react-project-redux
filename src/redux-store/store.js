import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import invoiesReducer from './reducers/invoiesReducer';
import AuthReducer from './reducers/AuthReducer';

const initialState = {};

const middleware = [thunk];

const rootReducer =  combineReducers({
    invoiesState: invoiesReducer,
    auth:AuthReducer
});

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

