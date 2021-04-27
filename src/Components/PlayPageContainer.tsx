import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {
    getCardForCompThunk,
    getCardThunk,
    getInitialState, startCompGameThunk,
    startComputerGame,
    startNewGameThunk,
    stopCompGame,
    stopGame,
    toggleShowStartButton
} from "../redux/play-reducer";
import {PlayPage} from "./PlayPage";

const mapStateToProps = (state: StateType) => {
    return{
        cards:state.playPage.cards,
        playTable:state.playPage.playTable,
        counterValuePlayer:state.playPage.counterValuePlayer,
        resultValuePlayer:state.playPage.resultValuePlayer,
        showStartButton:state.playPage.showStartButton,
        counterValueComp:state.playPage.counterValueComp,
        resultComputerValue:state.playPage.resultComputerValue
    }
}
export const PlayPageContainer = connect(mapStateToProps,{
    stopGame,
    toggleShowStartButton,
    getInitialState,
    startComputerGame,
    stopCompGame,
    getCardThunk,
    getCardForCompThunk,
    startNewGameThunk,
    startCompGameThunk
})(PlayPage)