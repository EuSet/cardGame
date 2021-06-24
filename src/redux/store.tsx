import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk, { ThunkAction } from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {playReducer} from "./playReducer/play-reducer";
import {loadState, saveState} from "../Components/Utills/localStorage";
import {AuthActionsType, authReducer} from "./authReducer/auth-reducer";
import {ActionType} from "./playReducer/play-reducer-actions";

let reducers = combineReducers({
    playPage: playReducer,
    auth: authReducer
})
export type StateType = ReturnType<typeof reducers>
export let store = createStore(reducers, loadState(), composeWithDevTools(applyMiddleware(thunk)) )
export type RootActionsType = ActionType | AuthActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, RootActionsType>
store.subscribe(() => {
    saveState({
        playPage: store.getState().playPage,
        auth: store.getState().auth
    })
})
//@ts-ignore
window.store = store.getState()
