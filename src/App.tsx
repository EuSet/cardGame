import React, {useState} from 'react';
import h from "./App.module.css"
import {PlayPageContainer} from "./Components/PlayPage/PlayPageContainer";
import {Container} from "@material-ui/core";
import {Header} from "./Components/Header/Header";
import {styleThemeType, ThemeContext, themeType} from "./Components/Common/theme-context";



function App() {
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
            <ThemeContext.Provider value={{styleTheme, theme}}>
            <Header AppBarStyle={AppBarStyle} setTheme={setTheme}/>
            <Container>
                <PlayPageContainer/>
            </Container>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
