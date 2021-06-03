import React, {useContext} from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import style from "./Header.module.css"
import {Radios} from "../Common/Radios";
import {ThemeContext, themeType} from "../Common/theme-context";

type PropsType = {
    setTheme: (value:themeType) => void
    AppBarStyle: () => string
}
export const Header:React.FC<PropsType> = (props) => {
    const {theme} = useContext(ThemeContext)
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            themeGreen: {
                color:'#B60900',
                borderColor:'#B60900',
                borderRadius:'4px'
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
    return  <AppBar className={props.AppBarStyle()} position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit">
                <Radios setTheme={props.setTheme}/>
            </IconButton>
            <Typography className={style.title} variant="h6">
                <span className={buttonTheme}>Card game 21</span>
            </Typography>
            <Button className={buttonTheme} variant={"outlined"}><span className={buttonTheme}>Login</span></Button>
        </Toolbar>
    </AppBar>

}
