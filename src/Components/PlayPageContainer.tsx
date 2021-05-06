import {useDispatch, useSelector} from "react-redux";
import {
    ActionType,
    changeAceValue,
    drawResultGame,
    getAnotherCard,
    getAnotherCardForComp,
    getInitialState,
    looseComputer,
    loosePlayer,
    placeBetBeforeStartGame,
    startComputerGame,
    startGame,
    stopCompGame,
    stopGame,
    toggleShowStartButton
} from "../redux/play-reducer";
import {PlayPage} from "./PlayPage"
import {Dispatch} from "redux";
import {selectAllValues} from "./Selectors";
import React, {useEffect} from "react";

export const PlayPageContainer = () => {
    const dispatch = useDispatch<Dispatch<ActionType>>()
    const {
        counterValuePlayer, resultValuePlayer,
        showStartButton, counterValueComp, resultComputerValue, bank,
        stakePlayer, stakeComputer
    } = useSelector(selectAllValues)
    const startGameFunction = () => {
        dispatch(getInitialState())
        dispatch(startGame())
        dispatch(toggleShowStartButton(false))
    }
    const getCard = () => {
        dispatch(getAnotherCard())
        dispatch(changeAceValue())
    }
    const stopGameFunction = () => {
        dispatch(stopGame())
        dispatch(startComputerGame())
    }
    const placeBetBeforeStartGameAC = (value: number) => {
        dispatch(placeBetBeforeStartGame(value))
    }

    useEffect(() => {
        if (counterValueComp > 0 && counterValueComp < 17) {
            setTimeout(() => {
                dispatch(getAnotherCardForComp())
                dispatch(changeAceValue())
            }, 3000)
        }
        if (counterValueComp <= 21 && counterValueComp >= 17) {
            setTimeout(() => {
                if (counterValueComp > resultValuePlayer) {
                    dispatch(stopCompGame())
                    dispatch(loosePlayer())
                }
                if (counterValueComp < resultValuePlayer || counterValueComp === 0) {
                    dispatch(stopCompGame())
                    dispatch(looseComputer())
                }
                if (counterValueComp === resultValuePlayer) {
                    dispatch(stopCompGame())
                    dispatch(drawResultGame())
                }
            }, 3000)

        }
        if (counterValueComp === 0) {
            setTimeout(() => {
                dispatch(getInitialState())
                dispatch(looseComputer())
            }, 2000)

        }
    }, [counterValueComp])
    useEffect(() => {
        if (counterValuePlayer > 21) {
            dispatch(getInitialState())
            dispatch(loosePlayer())
        }
    }, [counterValuePlayer])
    return <PlayPage
        stakePlayer={stakePlayer}
        stakeComputer={stakeComputer}
        bank={bank}
        counterValueComp={counterValueComp}
        counterValuePlayer={counterValuePlayer}
        resultComputerValue={resultComputerValue}
        resultValuePlayer={resultValuePlayer}
        showStartButton={showStartButton}
        startGameFunction={startGameFunction}
        getCard={getCard}
        stopGameFunction={stopGameFunction}
        placeBetBeforeStartGameAC={placeBetBeforeStartGameAC}
    />

}
