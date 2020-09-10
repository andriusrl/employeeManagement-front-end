import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import menu from "./menu";
import employees from "./employees";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    employees,
    menu,
  });
