import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {playReducer} from "./playReducer/play-reducer";
import {loadState, saveState} from "../Components/Utills/localStorage";

let reducers = combineReducers({
    playPage: playReducer,
})
export type StateType = ReturnType<typeof reducers>
export let store = createStore(reducers, loadState(), composeWithDevTools(applyMiddleware(thunk)) )

store.subscribe(() => {
    saveState({
        playPage: store.getState().playPage
    })
})
