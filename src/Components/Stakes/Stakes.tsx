import React, {ChangeEvent, useContext, useState} from "react";
import five from "./../cardsimages/chipsimg/five.png";
import twentyFive from "./../cardsimages/chipsimg/twentyfive.png";
import fifty from "./../cardsimages/chipsimg/fifty.png";
import oneHundred from "./../cardsimages/chipsimg/onehundred.png";
import s from "./Stakes.module.css"
import {Grid, Slider} from "@material-ui/core";
import {Buttons} from "./Buttons";
import {ThemeContext} from "../Common/theme-context";

export type PropsType = {
    stakePlayer:number
    bank:number
    placeBetBeforeStartGame:(value:number) => void
    startGameFunction: () => void
    getCard: () => void
    stopGameFunction: () => void
    showStartButton: boolean
    resultValuePlayer:number
    counterValuePlayer:number
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
        counterValuePlayer
    } = props
    const {styleTheme} = useContext(ThemeContext)


    console.log('Stakes')
    const [value, setValue] = useState<number>(0)
    const chooseBetSizeFunc = (chip:number) => {
        if(chip + value <= stakePlayer){
            setValue(value + chip)
        }
    }
    const onChangeRange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        let val = newValue as number
        setValue(val)
    }
    return <Grid className={s.container} container>
        <div>
        <Grid className={s.chips} container>
            <div>
            <img onClick={() => chooseBetSizeFunc(5)} src={five} alt={'5'}/>
            <img onClick={() => chooseBetSizeFunc(5)} src={five} alt={'5'}/>
            </div>
            <div>
            <img onClick={() => chooseBetSizeFunc(25)} src={twentyFive} alt={'25'}/>
            <img onClick={() => chooseBetSizeFunc(50)} src={fifty} alt={'50'}/>
            <img onClick={() => chooseBetSizeFunc(100)} src={oneHundred} alt={'100'}/>
            </div>
            <div className={s.slider}>
                <span style={{color:styleTheme, fontSize:'30px'}}>${stakePlayer}</span>
                <Slider
                    className={s.slider2}
                    style={{color:styleTheme, width:'100px'}}
                    step={5}
                    max={stakePlayer}
                    onChange={onChangeRange}
                />
            </div>
        </Grid>
        </div>
        <Buttons
            bank={bank}
            placeBetBeforeStartGame={placeBetBeforeStartGame}
            showStartButton={showStartButton}
            getCard={getCard}
            startGameFunction={startGameFunction}
            stopGameFunction={stopGameFunction}
            resultValuePlayer={resultValuePlayer}
            value={value}
            setValue={setValue}
            counterValuePlayer={counterValuePlayer}
        />
    </Grid>

})

