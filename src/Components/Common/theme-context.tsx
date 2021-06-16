import React from "react";

export type themeType = 'green' | 'dark'
export type styleThemeType = '#B60900' | '#d9c9c9'
type contextType = {
    styleTheme:styleThemeType
    theme:themeType
}
export const ThemeContext = React.createContext<contextType>({styleTheme:"#B60900", theme:"green"})

