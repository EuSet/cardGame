import React, {useEffect} from "react";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";

type PropsType = {
    setBtnName:(name:string) => void
}
export const Login = withRouter((props:RouteComponentProps & PropsType) => {
    useEffect(() => {
        props.setBtnName('Play')
        return () => props.setBtnName('login')
    },[props])
    return <div style={{height:'100vh'}}>
        <form>
            <div>
                <input name={'login'} placeholder={'email'}/>
            </div>
            <div>
                <input type={'password'} name={'password'} placeholder={'password'}/>
            </div>
            <div><input name={'rememberMe'} type={'checkbox'}/>Remember me</div>
            <div>
                <button>login</button>
                <button><NavLink to='./playpage'>Play</NavLink></button>
            </div>
        </form>
    </div>
})
