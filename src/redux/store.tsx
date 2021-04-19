import {combineReducers, createStore} from "redux"
import {PlayPageType, playReducer} from "./play-reducer";

export type StateType = {
    playPage: PlayPageType
}

let reducers = combineReducers({
    playPage: playReducer
})

export let store = createStore(reducers)