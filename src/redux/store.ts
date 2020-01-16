import {applyMiddleware, createStore} from "redux";
import todolistReducer from "./reducer";
import thunkMiddleware from 'redux-thunk'

 export type AppStateType = ReturnType<typeof todolistReducer>

const store = createStore(todolistReducer, applyMiddleware(thunkMiddleware));


export default store;