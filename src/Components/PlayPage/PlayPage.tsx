import React from "react";
import {Grid} from "@material-ui/core";
import {Bank} from "../Bank/Bank";
import {CardsContainer} from "../Cards/CardsContainer";
import p from "./PlayPage.module.css"
import {Stakes} from "../Stakes/Stakes";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/store";
import { Redirect } from "react-router-dom";

export type PropsType = {
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
    const auth = useSelector<StateType, boolean>(state => state.auth.auth)
    if(!auth){
       return <Redirect to={'/login'}/>
    }
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
            counterValuePlayer={counterValuePlayer}
        />
        </Grid>
    </Grid>
}
