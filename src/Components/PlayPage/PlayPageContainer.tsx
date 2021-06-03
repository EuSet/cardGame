import {useDispatch, useSelector} from "react-redux";
import {PlayPage} from "./PlayPage"
import {Dispatch} from "redux";
import {selectAllValues} from "../Common/Selectors";
import React, {useCallback, useEffect} from "react";
import {
    ActionType, changeAceValue, drawResultGame, getAnotherCard,
    getInitialState, looseComputer, loosePlayer, placeBetBeforeStartGame, startComputerGame,
    startGame, stopCompGame, stopGame,
    toggleShowStartButton
} from "../../redux/playReducer/play-reducer-actions";

export const PlayPageContainer = () => {
    const dispatch = useDispatch<Dispatch<ActionType>>()
    const {
        counterValuePlayer, resultValuePlayer,
        showStartButton, counterValueComp, resultComputerValue, bank,
        stakePlayer
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
    const placeBetBeforeStartGameAC = useCallback((value: number) => {
        dispatch(placeBetBeforeStartGame(value))
    },[dispatch])

    useEffect(() => {
        if (counterValueComp > 0 && counterValueComp < 17) {
            setTimeout(() => {
                dispatch(getAnotherCard())
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
    }, [dispatch, resultValuePlayer, counterValueComp])
    useEffect(() => {
        if (counterValuePlayer > 21) {
            setTimeout(() => {
                dispatch(getInitialState())
                dispatch(loosePlayer())
            },1500)
        }
    }, [dispatch, counterValuePlayer])
    return <PlayPage
        stakePlayer={stakePlayer}
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
