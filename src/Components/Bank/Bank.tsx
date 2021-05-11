import React from "react";
import {Grid} from "@material-ui/core";
import b from "./Bank.module.css"

type PropsType = {
    counterValueComp: number
    resultComputerValue: number
    counterValuePlayer: number
    resultValuePlayer: number
    bank: number
}
export const Bank: React.FC<PropsType> = props => {
    const {
        counterValueComp,
        resultComputerValue,
        counterValuePlayer,
        resultValuePlayer,
        bank
    } = props
    return <Grid className={b.container} spacing={9} container>
        <Grid item>
        <div className={b.value}>
            {!resultComputerValue ?
                <span>{counterValueComp}</span>
                :
                <span>{resultComputerValue}</span>
            }
        </div>
        </Grid>
        <Grid item>
        <div className={b.bank}>
            <h2>Bank</h2>
            <span>{bank}</span>
        </div>
        </Grid>
        <Grid item>
        <div className={b.value}>
            {!resultValuePlayer ?
                <span>{counterValuePlayer}</span>
                :
                <span>{resultValuePlayer}</span>
            }
        </div>
        </Grid>
    </Grid>

}
