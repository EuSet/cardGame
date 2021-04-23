import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {PlayPageType, playReducer} from "./play-reducer";

export type StateType = {
    playPage: PlayPageType
}

let reducers = combineReducers({
    playPage: playReducer
})

export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)) )