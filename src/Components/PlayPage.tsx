import React, {useEffect} from "react";
import {CardType} from "../redux/play-reducer";
import {Stakes} from "./Stakes/Stakes";

type PropsType = {
    playTable: Array<CardType>
    toggleShowStartButton: (toggle: boolean) => void
    getInitialState: () => void
    counterValuePlayer: number
    resultValuePlayer: number
    showStartButton: boolean
    counterValueComp: number
    resultComputerValue: number
    stopCompGame: () => void
    getCardThunk: () => void
    getCardForCompThunk: () => void
    startNewGameThunk: () => void
    startCompGameThunk: () => void
    drawResultGame: () => void
    loosePlayer: () => void
    looseComputer: () => void
    bank: number
    stakePlayer: number
    stakeComputer: number
    placeBetBeforeStartGame: (value: number) => void
}
export const PlayPage: React.FC<PropsType> = ({
                                                  counterValueComp, counterValuePlayer,
                                                  ...props
                                              }) => {
    const startGameFunction = () => {
        props.startNewGameThunk()
    }
    const getCard = () => {
        props.getCardThunk()
    }
    const stopGameFunction = () => {
        props.startCompGameThunk()
    }
    useEffect(() => {
        if (counterValueComp > 0 && counterValueComp < 17) {
            setTimeout(() => {
                props.getCardForCompThunk()
            }, 3000)
        }
        if (counterValueComp >= 17) {
            setTimeout(() => {
                if (counterValueComp > props.resultValuePlayer && counterValueComp < 22) {
                    props.stopCompGame()
                    props.loosePlayer()
                }
                if (counterValueComp < props.resultValuePlayer || counterValueComp > 21) {
                    props.stopCompGame()
                    props.looseComputer()
                }
                if (counterValueComp === props.resultValuePlayer) {
                    props.stopCompGame()
                    props.drawResultGame()
                }
            }, 3000)

        }
    }, [counterValueComp])

    useEffect(() => {
        if (counterValuePlayer > 21) {
            props.getInitialState()
            props.loosePlayer()
        }
    }, [counterValuePlayer])

    return <div>
        {props.bank !== 0 ?
            <div>
                {props.showStartButton ? <button onClick={startGameFunction}>start</button> : ''}
                {props.resultValuePlayer === 0 ? <button disabled={props.showStartButton} onClick={getCard}>get
                </button> : ''}
                {props.resultValuePlayer === 0 ?
                    <button disabled={props.showStartButton} onClick={stopGameFunction}>stop</button> : ''}
            </div>
            : <span>Place Bet</span>}
        <div>
            <span>{counterValueComp}</span>
            <hr/>
            <span>{props.resultComputerValue}</span>

        </div>
        <div>
            <div>
                <span>{counterValuePlayer}</span>
                <hr/>
                <span>{props.resultValuePlayer}</span>
            </div>
        </div>
        <Stakes bank={props.bank} stakeComputer={props.stakeComputer} stakePlayer={props.stakePlayer}
                placeBetBeforeStartGame={props.placeBetBeforeStartGame}/>
    </div>
}