import React, {useState} from "react";
import five from "./../cardsimages/chipsimg/five.png";
import twentyFive from "./../cardsimages/chipsimg/twentyfive.png";
import fifty from "./../cardsimages/chipsimg/fifty.png";
import oneHundred from "./../cardsimages/chipsimg/onehundred.png";
import s from "./Stakes.module.css"
import {Button, Grid} from "@material-ui/core";

type PropsType = {
    stakePlayer:number
    bank:number
    placeBetBeforeStartGame:(value:number) => void
    startGameFunction: () => void
    getCard: () => void
    stopGameFunction: () => void
    showStartButton: boolean
    resultValuePlayer:number
}

export const Stakes: React.FC<PropsType> = React.memo( (props) => {
    const {
        bank,
        showStartButton,
        startGameFunction,
        resultValuePlayer,
        getCard,
        stopGameFunction,
        stakePlayer,
        placeBetBeforeStartGame,
    } = props
    console.log('Stakes')
    const [value, setValue] = useState(0)
    return <Grid className={s.container} container>
        <div>
        <Grid className={s.chips} container>
            <div>
            <img onClick={() => {setValue(value + 5)}} src={five} alt={'5'}/>
            <img onClick={() => {setValue(value + 5)}} src={five} alt={'5'}/>
            </div>
            <div>
            <img onClick={() => {setValue(value + 25)}} src={twentyFive} alt={'25'}/>
            <img onClick={() => {setValue(value + 50)}} src={fifty} alt={'50'}/>
            <img onClick={() => {setValue(value + 100)}} src={oneHundred} alt={'100'}/>
            </div>
            <div>
                <span className={s.stake}>${stakePlayer}</span>
            </div>
        </Grid>
        </div>
        <div className={s.buttons}>
            <div>
            {value !== 0 ? <span>{value}</span> :
                bank === 0 ?
                    <span>Choose your bet size</span> : ''}
            </div>
            <div>
            {bank !== 0 ?
                <div>
                    {showStartButton ? <Button variant={"contained"} color={"secondary"} onClick={startGameFunction}>start</Button> : ''}
                    {resultValuePlayer === 0 ? <Button variant={"contained"} color={"secondary"} disabled={showStartButton} onClick={getCard}>get
                    </Button> : ''}
                    {resultValuePlayer === 0 ?
                        <Button variant={"contained"} color={"secondary"} disabled={showStartButton} onClick={stopGameFunction}>stop</Button> : ''}
                </div>
                : value === 0 ? '' : <Button variant={"contained"} color={"secondary"} onClick={() => {
                    placeBetBeforeStartGame(value)
                    setValue(0)
                }}>Bet</Button>}
            </div>
        </div>
    </Grid>

})

