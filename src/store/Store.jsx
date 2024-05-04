import { todoReducer } from "./TodoReducer";
import { legacy_createStore as createStore } from "redux";
export const store = createStore(todoReducer);
// import { createStore } from 'redux';

// import "./store/Store";

// import { legacy_createStore as createStore } from "redux";
// import todoReducer from './store/Store'; // Adjust the import path if necessary
// export const store = createStore(todoReducer);
