import React, {useEffect} from "react";
import {CardType} from "../redux/play-reducer";

type PropsType = {
    startGame: () => void
    playTable: Array<CardType>
    getAnotherCard: () => void
    stopGame: () => void
    toggleShowStartButton: () => void
    getInitialState: () => void
    counterValuePlayer: number
    resultValuePlayer: number
    showStartButton: boolean
    counterValueComp: number
    resultComputerValue: number
    startComputerGame: () => void
    getAnotherCardForComp: () => void
    stopCompGame: () => void
}
export const PlayPage = (props: PropsType) => {
    const startGameFunction = () => {
        props.startGame()
        props.toggleShowStartButton()
    }
    const getCard = () => {
        props.getAnotherCard()
        if (props.counterValuePlayer > 21) {
            alert('you loose')
        }
    }
    const startComputerGame = () => {
        props.startComputerGame()
    }
    useEffect(() => {
        if (props.counterValueComp > 0 && props.counterValueComp < 17) {
            props.getAnotherCardForComp()
        }
        if (props.counterValueComp >= 17 && props.counterValueComp <= 21) {
            props.stopCompGame()
        }
        if (props.counterValueComp > 21) {
            props.stopCompGame()
        }
    }, [props.counterValueComp])
    const stopGameFunction = () => {
        props.stopGame()
        props.toggleShowStartButton()
        startComputerGame()
    }
    useEffect(() => {
        if (props.counterValuePlayer > 21) {
            props.getInitialState()
        }
    }, [props.counterValuePlayer])
    return <div>
        {props.showStartButton ? <button onClick={startGameFunction}>start</button> : ''}
        <button disabled={props.showStartButton} onClick={getCard}>get
        </button>
        <button disabled={props.showStartButton} onClick={stopGameFunction}>stop</button>
        <div>
            <span>{props.counterValueComp}</span>
            <hr/>
            <span>{props.resultComputerValue}</span>
        </div>
        <div>
        <div>
            <span>{props.counterValuePlayer}</span>
            <hr/>
            <span>{props.resultValuePlayer}</span>
        </div>
        </div>
    </div>
}