import React, {useContext} from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import style from "./Header.module.css"
import {Radios} from "../Common/Radios";
import {ThemeContext, themeType} from "../Common/theme-context";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../redux/store";
import {signOut} from "../../redux/authReducer/auth-reducer";

type PropsType = {
    setTheme: (value:themeType) => void
    AppBarStyle: () => string
    changeThemeFunc: (value: themeType) => void
}
export const Header:React.FC<PropsType> = props => {
    const auth = useSelector<StateType, boolean>(state => state.auth.auth)
    const dispatch = useDispatch()
    const {theme} = useContext(ThemeContext)
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            themeGreen: {
                color:'#F50057',
                borderColor:'#F50057',
                borderRadius:'4px',
            },
            themeRed: {
                color:'#d9c9c9',
                borderColor:'#d9c9c9',
                borderRadius:'4px',
                borderBottom: '2px solid #d9c9c9'
            },
        }),
    );
    const classes = useStyles();
    const buttonTheme = theme === "green" ? classes.themeGreen : classes.themeRed
    return <AppBar className={props.AppBarStyle()} position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit">
                {auth && <Radios changeThemeFunc={props.changeThemeFunc} setTheme={props.setTheme}/>}
            </IconButton>
            <Typography className={style.title} variant="h6">
                <span className={buttonTheme}>{auth ? 'Card game 21' :
                    'To take part in the game - register or enter your username and password'}</span>
            </Typography>
            {auth && <Button onClick={() => dispatch(signOut())} className={buttonTheme}
                             variant={"outlined"}><span>log out</span></Button>}
        </Toolbar>
    </AppBar>
}
