import {cardsArray} from "../../Components/Common/cardsArray";
import {ActionType} from "./play-reducer-actions";

export type PlayPageType = {
    cards: Array<CardType>
    playTable: Array<CardType>
    counterValuePlayer: number
    resultValuePlayer: number
    counterValueComp: number
    resultComputerValue: number
    showStartButton: boolean
    stakePlayer: number
    stakeComputer: number
    bank: number
}
export type CardType = {
    value: number,
    image: JSX.Element,
    id: string
}

export enum TYPES_OF_ACTIONS {
    SET_TWO_CARDS_TO_PLAY_TABLE = 'SET_TWO_CARDS_TO_PLAY_TABLE',
    GET_ANOTHER_CARD = 'GET_ANOTHER_CARD',
    SAVE_COUNT_VALUE = 'SAVE_COUNT_VALUE',
    TOGGLE_SHOW_START_BUTTON = 'TOGGLE_SHOW_START_BUTTON',
    READY_FOR_NEW_GAME = 'READY_FOR_NEW_GAME',
    CHANGE_ACE_VALUE = 'CHANGE_ACE_VALUE',
    PLACE_BET = 'PLACE_BET',
    RESULT_GAME_FOR_STAKES = 'RESULT_GAME_FOR_STAKES'
}

export const initialState: PlayPageType = {
    cards: cardsArray,
    playTable: [],
    counterValuePlayer: 0,
    counterValueComp: 0,
    resultValuePlayer: 0,
    resultComputerValue: 0,
    showStartButton: true,
    stakePlayer: 1000,
    stakeComputer: 10000,
    bank: 0,
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

    function remainderCardFunc(): CardType[] {
        let remainderCards: CardType[] = state.cards
        for (let i = 0; i < state.playTable.length; i++) {
            remainderCards = remainderCards.filter(c => c.id !== state.playTable[i].id)
        }
        return remainderCards
    }

    function getCardFunc() {
        const card = remainderCardFunc()[Math.floor(Math.random() * remainderCardFunc().length)]
        if (card.value === 1) {
            card.value = 11
        }
        return card
    }

    function changeAce() {
        console.log('change ace')

        let newValue = state.counterValueComp > 0 ? state.counterValueComp : state.counterValuePlayer
        if (newValue > 21) {
            for (let i = 0; i < state.playTable.length; i++) {
                if (state.playTable[i].value === 11 && newValue > 21) {
                    newValue = newValue - state.playTable[i].value
                    state.playTable[i].value = 1
                    newValue = newValue + state.playTable[i].value
                }
            }
        }
        if (newValue > 21 && state.counterValueComp !== 0) {
            newValue = 0
            return newValue
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
                        cards: remainderCardFunc(),
                        resultCardsPlayer: [],
                        counterValuePlayer: (state.counterValuePlayer + state.playTable[0].value + state.playTable[1].value) === 22 ?
                            21 : state.counterValuePlayer + state.playTable[0].value + state.playTable[1].value,
                        resultValuePlayer: 0,
                        resultComputerValue: 0
                    }
                case "computer":
                    return {
                        ...state,
                        cards: remainderCardFunc(),
                        playTable: state.playTable,
                        counterValueComp: (state.counterValueComp + state.playTable[0].value + state.playTable[1].value) === 22 ?
                            21 : state.counterValueComp + state.playTable[0].value + state.playTable[1].value
                    }
                default:
                    return state
            }
        case "GET_ANOTHER_CARD":
            const newCard = getCardFunc()
                    return {
                        ...state,
                        cards: remainderCardFunc(),
                        playTable: [...state.playTable, newCard],
                        counterValuePlayer: state.counterValuePlayer > 0 ?  state.counterValuePlayer + newCard.value : 0,
                        counterValueComp: state.counterValueComp > 0 ? state.counterValueComp + newCard.value : 0
                    }
        case "SAVE_COUNT_VALUE":
            switch (action.payload) {
                case 'player':
                    return {
                        ...state,
                        cards: remainderCardFunc(),
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
                        stakePlayer: state.stakePlayer + (state.bank / 2),
                        stakeComputer: state.stakeComputer + (state.bank / 2),
                        bank: 0
                    }
                case "comp loose":
                    return {
                        ...state,
                        stakePlayer: state.stakePlayer + state.bank,
                        bank: 0
                    }
                case "player loose":
                    return {
                        ...state,
                        stakeComputer: state.stakeComputer + state.bank,
                        bank: 0
                    }
                default:
                    return state
            }
        default:
            return state
    }
}


