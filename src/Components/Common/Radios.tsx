import React, {useContext} from "react";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import {ThemeContext, themeType} from "./theme-context";

type PropsType = {
    setTheme: (value:themeType) => void
    changeThemeFunc:(value: themeType) => void
}
export const Radios = (props:PropsType) => {
    const {theme} = useContext(ThemeContext)
    const GreenRadio = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })((props: RadioProps) => <Radio color="default" {...props} />);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value === 'green' || event.target.value === 'red' || event.target.value === 'dark'){
            props.changeThemeFunc(event.target.value)
            // props.setTheme(event.target.value)
        }
    };
    return <>
        <Radio
            style={{color:'#B60900'}}
            checked={theme === 'red'}
            onChange={handleChange}
            value="red"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'B' }}
        />
        <GreenRadio
            checked={theme === 'green'}
            onChange={handleChange}
            value="green"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'C' }}
        />
        <Radio
            checked={theme === 'dark'}
            onChange={handleChange}
            value="dark"
            color="default"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'D' }}
        />
        </>
}
