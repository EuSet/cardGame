import React from "react";

export type themeType = 'green' | 'dark'
export type styleThemeType = '#F50057' | '#d9c9c9'
type contextType = {
    styleTheme:styleThemeType
    theme:themeType
}
export const ThemeContext = React.createContext<contextType>({styleTheme:"#F50057", theme:"green"})

