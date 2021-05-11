import React from "react";
import {Grid} from "@material-ui/core";
import {Bank} from "../Bank/Bank";
import {CardsContainer} from "../Cards/CardsContainer";
import p from "./PlayPage.module.css"
import {Stakes} from "../Stakes/Stakes";

type PropsType = {
    counterValuePlayer: number
    resultValuePlayer: number
    showStartButton: boolean
    counterValueComp: number
    resultComputerValue: number
    bank: number
    stakePlayer: number
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
        placeBetBeforeStartGameAC,
        startGameFunction,
        getCard,
        stopGameFunction
    } = props

    return <Grid className={p.container} container>
        <Grid item>
        <Bank counterValueComp={counterValueComp}
              resultComputerValue={resultComputerValue}
              counterValuePlayer={counterValuePlayer}
              resultValuePlayer={resultValuePlayer}
              bank={bank}
        />
        </Grid>
        <Grid item>
        <CardsContainer/>
        </Grid>
        <Grid item>
        <Stakes
            bank={bank}
            stakePlayer={stakePlayer}
            placeBetBeforeStartGame={placeBetBeforeStartGameAC}
            showStartButton={showStartButton}
            getCard={getCard}
            startGameFunction={startGameFunction}
            stopGameFunction={stopGameFunction}
            resultValuePlayer={resultValuePlayer}
        />
        </Grid>
    </Grid>
}
