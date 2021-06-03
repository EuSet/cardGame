import {TYPES_OF_ACTIONS} from "./play-reducer";
export type ActionType =
    ReturnType<typeof startGame> |
    ReturnType<typeof getAnotherCard> |
    ReturnType<typeof stopGame> |
    ReturnType<typeof toggleShowStartButton> |
    ReturnType<typeof getInitialState> |
    ReturnType<typeof startComputerGame> |
    ReturnType<typeof stopCompGame> |
    ReturnType<typeof changeAceValue> |
    ReturnType<typeof placeBetBeforeStartGame> |
    ReturnType<typeof drawResultGame> |
    ReturnType<typeof loosePlayer> |
    ReturnType<typeof looseComputer>

export const startGame = () => {
    return {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: 'player'} as const
}
export const startComputerGame = () => {
    return {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: 'computer'} as const
}
export const getAnotherCard = () => {
    return {type: TYPES_OF_ACTIONS.GET_ANOTHER_CARD, payload: 'player'} as const
}
export const stopGame = () => {
    return {type: TYPES_OF_ACTIONS.SAVE_COUNT_VALUE, payload: 'player'} as const
}
export const stopCompGame = () => {
    return {type: TYPES_OF_ACTIONS.SAVE_COUNT_VALUE, payload: 'computer'} as const
}
export const toggleShowStartButton = (toggle: boolean) => {
    return {type: TYPES_OF_ACTIONS.TOGGLE_SHOW_START_BUTTON, toggle} as const
}
export const getInitialState = () => {
    return {type: TYPES_OF_ACTIONS.READY_FOR_NEW_GAME} as const
}
export const changeAceValue = () => {
    return {type: TYPES_OF_ACTIONS.CHANGE_ACE_VALUE} as const
}
export const placeBetBeforeStartGame = (value: number) => {
    return {type: TYPES_OF_ACTIONS.PLACE_BET, value} as const
}
export const drawResultGame = () => {
    return {type: TYPES_OF_ACTIONS.RESULT_GAME_FOR_STAKES, payload: 'draw'} as const
}
export const loosePlayer = () => {
    return {type: TYPES_OF_ACTIONS.RESULT_GAME_FOR_STAKES, payload: 'player loose'} as const
}
export const looseComputer = () => {
    return {type: TYPES_OF_ACTIONS.RESULT_GAME_FOR_STAKES, payload: 'comp loose'} as const
}
