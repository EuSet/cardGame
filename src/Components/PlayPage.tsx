import React from "react";
import {StakesMemo} from "./Stakes/Stakes";

type PropsType = {
    counterValuePlayer: number
    resultValuePlayer: number
    showStartButton: boolean
    counterValueComp: number
    resultComputerValue: number
    bank: number
    stakePlayer: number
    stakeComputer: number
    placeBetBeforeStartGameAC: (value: number) => void
    startGameFunction: () => void
    getCard: () => void
    stopGameFunction: () => void
}
export const PlayPage: React.FC<PropsType> = props => {
    const {
        counterValuePlayer,
        resultValuePlayer,
        showStartButton,
        counterValueComp,
        resultComputerValue,
        bank,
        stakePlayer,
        stakeComputer,
        placeBetBeforeStartGameAC,
        startGameFunction,
        getCard,
        stopGameFunction
    } = props

    return <div>
        {bank !== 0 ?
            <div>
                {showStartButton ? <button onClick={startGameFunction}>start</button> : ''}
                {resultValuePlayer === 0 ? <button disabled={showStartButton} onClick={getCard}>get
                </button> : ''}
                {resultValuePlayer === 0 ?
                    <button disabled={showStartButton} onClick={stopGameFunction}>stop</button> : ''}
            </div>
            : <span>Place Bet</span>}
        <div>
            <span>{counterValueComp}</span>
            <hr/>
            <span>{resultComputerValue}</span>

        </div>
        <div>
            <div>
                <span>{counterValuePlayer}</span>
                <hr/>
                <span>{resultValuePlayer}</span>
            </div>
        </div>
        <StakesMemo bank={bank} stakeComputer={stakeComputer} stakePlayer={stakePlayer}
                    placeBetBeforeStartGame={placeBetBeforeStartGameAC}/>
    </div>
}