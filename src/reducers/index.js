import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import menu from "./menu";
import employee from "./employee";
import role from "./role";


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    employee,
    menu,
    role
  });