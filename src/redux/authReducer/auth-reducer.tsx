import {fire} from "../../firebase/fireConfig";
import {AppThunk} from "../store";

export type AuthActionsType = ReturnType<typeof signInAC> |
    ReturnType<typeof signOutAC> | ReturnType<typeof showErrorAC>
export type InitAuthStateType = {
    auth:boolean
    error:string | null
}
export const initAuthState:InitAuthStateType = {
    auth:false,
    error:null
}
export const authReducer = (state: InitAuthStateType = initAuthState, action: AuthActionsType):InitAuthStateType => {
    switch (action.type) {
        case "auth/SIGN_IN":
            return {...state,auth:true}
        case "auth/SIGN_OUT":
            return {...state, auth:false}
        case "auth/SHOW_ERROR":
            return {...state, error:action.error}
        default:
            return state
    }

}
export const signInAC = () => {
    return {type: 'auth/SIGN_IN'} as const
}
export const signOutAC = () => {
    return {type: 'auth/SIGN_OUT'} as const
}
export const showErrorAC = (error:string | null) => {
    return {type: 'auth/SHOW_ERROR', error} as const
}

export const signIn = (email:string, password: string, userName:string):AppThunk => async (dispatch) => {
    try {
        await fire.auth().signInWithEmailAndPassword(email, password)
        if (fire.auth().currentUser?.emailVerified) {
            dispatch(signInAC())
            dispatch(showErrorAC(null))
        } else {
            dispatch(showErrorAC('you need to verify your mail'))
        }
    } catch (e) {
        dispatch(showErrorAC(e.toString()))
    }
    setTimeout(() => {
        dispatch(showErrorAC(null))
    },5000)
}
export const signOut = ():AppThunk => async (dispatch) => {
    try {
        await fire.auth().signOut()
        dispatch(signOutAC())
    } catch (e) {
        throw new Error(e)
    }
}
export const signUp = (email:string, password: string, userName:string): AppThunk => async (dispatch) =>{
    try {
        const res = await fire.auth().createUserWithEmailAndPassword(email, password)
        res.user?.updateProfile({
            displayName:userName
        })
        try {
            dispatch(showErrorAC('Please, verifid your email. Follow the link that we sent you and sign in'))
            await fire.auth().currentUser?.sendEmailVerification()
            const userId = fire.auth().currentUser?.uid
            await fire.database().ref(`users/${userId}`).set({
                username: userName,
                email: email
            });
        } catch (e) {
            dispatch(showErrorAC(e.toString()))
        }
    } catch (e) {
        dispatch(showErrorAC(e.toString()))
    }
    setTimeout(() => {
        dispatch(showErrorAC(null))
    },5000)
}
