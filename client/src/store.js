import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const initialState = {};
const middleWare = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWare), compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))