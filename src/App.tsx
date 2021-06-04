import React, {useState} from 'react';
import h from "./App.module.css"
import {PlayPageContainer} from "./Components/PlayPage/PlayPageContainer";
import {Container} from "@material-ui/core";
import {Header} from "./Components/Header/Header";
import {styleThemeType, ThemeContext, themeType} from "./Components/Common/theme-context";
import {Login} from "./Components/Login/Login";
import {BrowserRouter, Route, Redirect} from "react-router-dom";



function App() {
    const [btnName, setBtnName] = useState('login')
    const [theme, setTheme] = useState<themeType>('green');
    let styleTheme:styleThemeType = '#B60900'
    const AppBarStyle = () => {
        switch (theme) {
            case "red":
                styleTheme = '#d9c9c9'
                return h.AppBarRed
            case "dark":
                styleTheme = '#d9c9c9'
                return h.AppBarDark
            case "green":
            default :
                styleTheme = '#B60900'
                return h.AppBarGreen
        }
    }
    return (
        <div className={AppBarStyle()}>
            <BrowserRouter>
            <ThemeContext.Provider value={{styleTheme, theme}}>
            <Header btnName={btnName} AppBarStyle={AppBarStyle} setTheme={setTheme}/>
            <Container>
                <Redirect exact from="/" to="/playpage" />
                <Route path='/login' render={() => <Login setBtnName={setBtnName} />}/>
                <Route exact path='/playpage' render={() => <PlayPageContainer/>}/>
            </Container>
            </ThemeContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
