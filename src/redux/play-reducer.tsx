import {cardsArray} from "../Components/cardsArray";

export type ActionType =
    ReturnType<typeof startGame> |
    ReturnType<typeof getAnotherCard> |
    ReturnType<typeof stopGame> |
    ReturnType<typeof toggleShowStartButton> |
    ReturnType<typeof getInitialState> |
    ReturnType<typeof startComputerGame> |
    ReturnType<typeof getAnotherCardForComp> |
    ReturnType<typeof stopCompGame> |
    ReturnType<typeof changeAceValue> |
    ReturnType<typeof placeBetBeforeStartGame> |
    ReturnType<typeof drawResultGame> |
    ReturnType<typeof loosePlayer> |
    ReturnType<typeof looseComputer>

export type PlayPageType = {
    cards: Array<CardType>
    playTable: Array<CardType>
    counterValuePlayer: number
    resultValuePlayer: number
    counterValueComp: number
    resultComputerValue: number
    showStartButton: boolean
    stakePlayer:number
    stakeComputer:number
    bank:number
}
export type CardType = {
    value: number,
    image: JSX.Element,
    id: string
}
const SET_TWO_CARDS_TO_PLAY_TABLE = 'SET_TWO_CARDS_TO_PLAY_TABLE'
const GET_ANOTHER_CARD = 'GET_ANOTHER_CARD'
const SAVE_COUNT_VALUE = 'SAVE_COUNT_VALUE'
const TOGGLE_SHOW_START_BUTTON = 'TOGGLE_SHOW_START_BUTTON'
const READY_FOR_NEW_GAME = 'READY_FOR_NEW_GAME'
const CHANGE_ACE_VALUE = 'CHANGE_ACE_VALUE'
const PLACE_BET = 'PLACE_BET'
const RESULT_GAME_FOR_STAKES = 'RESULT_GAME_FOR_STAKES'

export const initialState: PlayPageType = {
    cards: cardsArray,
    playTable: [],
    counterValuePlayer: 0,
    counterValueComp: 0,
    resultValuePlayer: 0,
    resultComputerValue: 0,
    showStartButton: true,
    stakePlayer:1000,
    stakeComputer:10000,
    bank:0,
}

export const playReducer = (state: PlayPageType = initialState, action: ActionType) => {

    function getRandomCards(): Array<CardType> {
        function shuffleCards(): CardType {
            const card = state.cards[Math.floor(Math.random() * state.cards.length)]
            if (card.value === 1) {
                card.value = 11
            }
            if (card.value === 11) {
                if (state.counterValueComp === 11 || state.counterValuePlayer === 11) {
                    card.value = 10
                    return card
                }
            }
            return card
        }

        const card = shuffleCards()
        if (state.playTable[0]) {
            if (state.playTable[0].id !== card.id) {
                state.playTable = [...state.playTable, card]
                return state.playTable
            } else {
                getRandomCards()
            }
        } else {
            state.playTable = [...state.playTable, card]
            return state.playTable
        }
        return state.playTable
    }

    function newPlayTable() {
        getRandomCards()
        getRandomCards()
    }

    function remainderCardFunc() {
        let remainderCards: CardType[] = state.cards
        for (let i = 0; i < state.playTable.length; i++) {
            remainderCards = remainderCards.filter(c => c.id !== state.playTable[i].id)
        }
        return remainderCards
    }
    function getCardFunc() {
        const card = remainderCardFunc()![Math.floor(Math.random() * remainderCardFunc()!.length)]
        if (card.value === 1) {
            card.value = 11
        }
        return card
    }

    function changeAce() {
        let newValue = state.counterValueComp > 0 ? state.counterValueComp : state.counterValuePlayer
        if (newValue > 21) {
            for (let i = 0; i < state.playTable.length; i++) {
                if (state.playTable[i].value === 11) {
                    newValue = newValue - state.playTable[i].value
                    state.playTable[i].value = 1
                    newValue = newValue + state.playTable[i].value
                }
            }
        }

        return newValue
    }

    switch (action.type) {
        case "SET_TWO_CARDS_TO_PLAY_TABLE":
            newPlayTable()
            switch (action.payload) {
                case "player":
                    return {
                        ...state,
                        playTable: state.playTable,
                        cards:remainderCardFunc(),
                        resultCardsPlayer: [],
                        counterValuePlayer: state.counterValuePlayer + state.playTable[0].value + state.playTable[1].value,
                        resultValuePlayer: 0,
                        resultComputerValue: 0
                    }
                case "computer":
                    return {
                        ...state,
                        playTable: state.playTable,
                        counterValueComp: state.counterValueComp + state.playTable[0].value + state.playTable[1].value
                    }
                default:
                    return state
            }
        case "GET_ANOTHER_CARD":
            const newCard = getCardFunc()
            switch (action.payload) {
                case 'player':
                    return {
                        ...state,
                        cards:remainderCardFunc(),
                        playTable: [...state.playTable, newCard],
                        counterValuePlayer: state.counterValuePlayer + newCard.value
                    }
                case 'computer':
                    return {
                        ...state,
                        playTable: [...state.playTable, newCard],
                        counterValueComp: state.counterValueComp + newCard.value
                    }
                default:
                    return state
            }
        case "SAVE_COUNT_VALUE":
            switch (action.payload) {
                case 'player':
                    return {
                        ...state,
                        cards:remainderCardFunc(),
                        resultValuePlayer: state.counterValuePlayer,
                        counterValuePlayer: 0,
                        playTable: [],
                    }
                case 'computer':
                    return {
                        ...state,
                        resultComputerValue: state.counterValueComp,
                        counterValueComp: 0,
                        playTable: [],
                        showStartButton: true
                    }
                default:
                    return state

            }
        case "TOGGLE_SHOW_START_BUTTON":
            return {
                ...state,
                showStartButton: !state.showStartButton
            }
        case "READY_FOR_NEW_GAME":
            return {
                ...state,
                counterValuePlayer: 0,
                cards: cardsArray,
                playTable: [],
                resultValuePlayer: 0,
                counterValueComp: 0,
                resultComputerValue: 0,
                showStartButton: true,
            }
        case "CHANGE_ACE_VALUE":
            return {
                ...state,
                counterValuePlayer: state.counterValueComp === 0 ? changeAce() : 0,
                counterValueComp: state.counterValueComp > 0 ? changeAce() : 0,
                playTable: state.playTable,
            }
        case "PLACE_BET":
            return {
                ...state,
                stakePlayer: state.stakePlayer - action.value,
                stakeComputer: state.stakeComputer - action.value,
                bank: action.value * 2
            }
        case "RESULT_GAME_FOR_STAKES":
            switch (action.payload) {
                case "draw":
                    return {
                        ...state,
                        stakePlayer:state.stakePlayer + (state.bank / 2),
                        stakeComputer: state.stakeComputer + (state.bank / 2),
                        bank:0
                    }
                case "comp loose":
                    return {
                        ...state,
                        stakePlayer:state.stakePlayer + state.bank,
                        bank:0
                    }
                case "player loose":
                    return {
                        ...state,
                        stakeComputer: state.stakeComputer + state.bank,
                        bank:0
                    }
                default:
                    return state
            }
        default:
            return state
    }
}
export const startGame = () => {
    return {type: SET_TWO_CARDS_TO_PLAY_TABLE, payload: 'player'} as const
}
export const startComputerGame = () => {
    return {type: SET_TWO_CARDS_TO_PLAY_TABLE, payload: 'computer'} as const
}
export const getAnotherCard = () => {
    return {type: GET_ANOTHER_CARD, payload: 'player'} as const
}
export const getAnotherCardForComp = () => {
    return {type: GET_ANOTHER_CARD, payload: 'computer'} as const
}
export const stopGame = () => {
    return {type: SAVE_COUNT_VALUE, payload: 'player'} as const
}
export const stopCompGame = () => {
    return {type: SAVE_COUNT_VALUE, payload: 'computer'} as const
}
export const toggleShowStartButton = (toggle: boolean) => {
    return {type: TOGGLE_SHOW_START_BUTTON, toggle} as const
}
export const getInitialState = () => {
    return {type: READY_FOR_NEW_GAME} as const
}
export const changeAceValue = () => {
    return {type: CHANGE_ACE_VALUE} as const
}
export const placeBetBeforeStartGame = (value:number) => {
    return {type:PLACE_BET, value} as const
}
export const drawResultGame = () => {
    return {type:RESULT_GAME_FOR_STAKES, payload:'draw'} as const
}
export const loosePlayer = () => {
    return {type:RESULT_GAME_FOR_STAKES, payload:'player loose'} as const
}
export const looseComputer = () => {
    return {type:RESULT_GAME_FOR_STAKES, payload:'comp loose'} as const
}


export const getCardThunk = () => {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(getAnotherCard())
        dispatch(changeAceValue())
    }
}
export const getCardForCompThunk = () => {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(getAnotherCardForComp())
        dispatch(changeAceValue())
    }
}
export const startNewGameThunk = () => {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(getInitialState())
        dispatch(startGame())
        dispatch(toggleShowStartButton(false))
    }
}
export const startCompGameThunk = () => {
    return (dispatch:(action:ActionType) => void) => {
        dispatch(stopGame())
        dispatch(startComputerGame())
    }
}
