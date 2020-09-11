import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "./reducers";
import { routerMiddleware } from "connected-react-router";
import Router from "./containers/Router";
import styled from "styled-components";
import Headers from './components/header';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

const Main = styled.div`
  height: 100vh;
  @media (min-width: 600px) {
        width: 70%
    }
  margin: 0 auto 0 auto;
`

ReactDOM.render(
  <Provider store={store}>
    <Main>
      <Headers />
      <Box m={1} />
      <Paper elevation={3}>
        <Router history={history} />
      </Paper>
    </Main>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
