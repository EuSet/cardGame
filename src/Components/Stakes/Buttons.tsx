import s from "./Stakes.module.css";
import {Button} from "@material-ui/core";
import React, {useContext} from "react";
import {ThemeContext} from "../Common/theme-context";

export type PropsType = {
    bank: number
    placeBetBeforeStartGame: (value: number) => void
    startGameFunction: () => void
    getCard: () => void
    stopGameFunction: () => void
    showStartButton: boolean
    resultValuePlayer: number
    value: number,
    setValue: (value: number) => void
    counterValuePlayer:number
}

export const Buttons = (props: PropsType) => {
    const {
        placeBetBeforeStartGame,
        bank,
        showStartButton,
        startGameFunction,
        resultValuePlayer,
        getCard,
        stopGameFunction,
        value,
        setValue,
        counterValuePlayer
    } = props
    const {styleTheme, theme} = useContext(ThemeContext)
    const textTheme = theme === "green" ? '#d9c9c9' : 'black'
    return <div style={{color:styleTheme}} className={s.buttons}>
        <div>
            {value !== 0 ? <span>{value}</span> :
                bank === 0 ?
                    <span style={{color: styleTheme}}>Choose your bet size (press on chips or use slider)</span> : ''}
        </div>
        <div>
            {bank !== 0 ?
                <div>
                    {resultValuePlayer === 0 && counterValuePlayer !== 0 ?
                        <Button variant={"contained"} style={{background: styleTheme}}
                                disabled={showStartButton} onClick={getCard}>
                            <span style={{color: textTheme}}>get</span>
                        </Button> : ''}
                    {showStartButton ? <Button variant={"contained"} style={{background: styleTheme}}
                                               onClick={startGameFunction}>
                        <span style={{color: textTheme}}>start</span></Button> : ''}
                    {resultValuePlayer === 0 && counterValuePlayer !== 0 ?
                        <Button variant={"contained"} style={{background: styleTheme}} disabled={showStartButton}
                                onClick={stopGameFunction}><span style={{color: textTheme}}>stop</span></Button> : ''}
                </div>
                : value === 0 ? '' : <Button variant={"contained"} style={{background: styleTheme}} onClick={() => {
                    placeBetBeforeStartGame(value)
                    setValue(0)
                }}><span style={{color: textTheme}}>Bet</span></Button>}
        </div>
    </div>
}
