import React, {useState} from "react";

type PropsType = {
    stakePlayer:number
    stakeComputer:number
    bank:number
    placeBetBeforeStartGame:(value:number) => void
}

export const Stakes = (props:PropsType) => {
    const [value, setValue] = useState(0)
    return <div>
        <div>
            <h2>Player Stake</h2>
            <input value={props.stakePlayer}/>
            <input type={'number'} value={value} onChange={(e) => {setValue(e.currentTarget.valueAsNumber)}}/>
            <button onClick={() => {
                props.placeBetBeforeStartGame(value)
                setValue(0)
            }}>Bet</button>
        </div>
        <div>
            <h2>Computer Stake</h2>
            <input value={props.stakeComputer}/>
        </div>
        <div>
            <h2>Bank</h2>
            <input value={props.bank}/>
        </div>

    </div>

}