import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {generateReducers} from '../reducers/index';

const store = createStore(generateReducers, applyMiddleware(thunk));