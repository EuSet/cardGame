import React, {useEffect} from "react";
import {CardType} from "../redux/play-reducer";

type PropsType = {
    startGame: () => void
    playTable: Array<CardType>
    stopGame: () => void
    toggleShowStartButton: (toggle:boolean) => void
    getInitialState: () => void
    counterValuePlayer: number
    resultValuePlayer: number
    showStartButton: boolean
    counterValueComp: number
    resultComputerValue: number
    startComputerGame: () => void
    stopCompGame: () => void
    getCardThunk: () => void
    getCardForCompThunk: () => void
}
export const PlayPage: React.FC<PropsType> = ({counterValueComp,counterValuePlayer,
    ...props}) => {
    const startGameFunction = () => {
        props.startGame()
        props.toggleShowStartButton(false)
    }
    const getCard = () => {
        props.getCardThunk()
        // props.getAnotherCard()
        // if (props.counterValuePlayer > 21) {
        //     alert('you loose')
        // }
    }
    const startComputerGame = () => {
        props.startComputerGame()
    }
    useEffect(() => {
        if (counterValueComp > 0 && counterValueComp < 17) {
            setTimeout(() => {
                props.getCardForCompThunk()
            }, 3000)
        }
        if (counterValueComp >= 17 && counterValueComp <= 21) {
            setTimeout(() => {
                props.stopCompGame()
            }, 3000)

        }
        if (counterValueComp > 21) {
            setTimeout(() => {
                props.getInitialState()
            }, 3000)
        }
    }, [counterValueComp])

    const stopGameFunction = () => {
        props.stopGame()
        startComputerGame()
    }
    useEffect(() => {
        if (counterValuePlayer > 21) {
            // props.changeAceValue()
            // if (props.counterValuePlayer > 21) {
                props.getInitialState()
            // }
        }
    }, [counterValuePlayer])

    return <div>
        {props.showStartButton ? <button onClick={startGameFunction}>start</button> : ''}
        {props.resultValuePlayer === 0 ? <button disabled={props.showStartButton} onClick={getCard}>get
        </button> : ''}
        {props.resultValuePlayer === 0 ? <button disabled={props.showStartButton} onClick={stopGameFunction}>stop</button> : ''}
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
    </div>
}