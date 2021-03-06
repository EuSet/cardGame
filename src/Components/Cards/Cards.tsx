import React from "react";
import d from "./Cards.module.css"
import {CardType} from "../../redux/playReducer/play-reducer";
import {Grid} from "@material-ui/core";

export type PropsType = {
    playTable: Array<CardType>
    resultValuePlayer: number
}
export const Cards = (props: PropsType) => {

    let cards = props.playTable.map(c => {
        return <Grid key={c.id} item>
            <div key={c.id} className={d.cards}>
                {c.image}
            </div>
        </Grid>
    })
    return <div>
    <Grid justify={"center"} container>
            {cards}
        </Grid>
    </div>
}
