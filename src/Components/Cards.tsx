import React from "react";
import d from "./Cards.module.css"
import {CardType} from "../redux/play-reducer";
import {Grid} from "@material-ui/core";

export type PropsType = {
    playTable:Array<CardType>
}

export const Cards = (props:PropsType) => {
    return <div>
        <Grid container>
        {props.playTable.map(c => {
           return <Grid item>
               <div className={d.cards}>
                   {c.image}
               </div>
            </Grid>
        })}
        </Grid>
</div>
}