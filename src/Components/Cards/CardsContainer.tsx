import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {Cards} from "./Cards";

export const mapStateToProps = (state:StateType) => {
    return {
        playTable: state.playPage.playTable,
        resultValuePlayer: state.playPage.resultValuePlayer,
    }
}

export const CardsContainer = connect(mapStateToProps)(Cards)
