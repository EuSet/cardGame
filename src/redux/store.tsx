import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {playReducer} from "./play-reducer";

let reducers = combineReducers({
    playPage: playReducer,
})
export type StateType = ReturnType<typeof reducers>
export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)) )