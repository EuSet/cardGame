import React from 'react'
import twoC from './../Components/cardsimages/2C.png'
import threeC from './../Components/cardsimages/3C.png'
import fourC from './../Components/cardsimages/4C.png'
import fiveC from './../Components/cardsimages/5C.png'
import sixC from './../Components/cardsimages/6C.png'
import sevenC from './../Components/cardsimages/7C.png'
import eightC from './../Components/cardsimages/8C.png'
import nineC from './../Components/cardsimages/9C.png'
import tenC from './../Components/cardsimages/10C.png'
import jackC from './../Components/cardsimages/JC.png'
import queenC from './../Components/cardsimages/QC.png'
import kingC from './../Components/cardsimages/KC.png'
import aceC from './../Components/cardsimages/AC.png'
import {v1} from "uuid";

export type ActionType =
    ReturnType<typeof startGame> |
    ReturnType<typeof getAnotherCard> |
    ReturnType<typeof stopGame> |
    ReturnType<typeof toggleShowStartButton> |
    ReturnType<typeof getInitialState> |
    ReturnType<typeof startComputerGame> |
    ReturnType<typeof getAnotherCardForComp> |
    ReturnType<typeof stopCompGame>

export type PlayPageType = {
    cards: Array<CardType>
    playTable: Array<CardType>
    counterValuePlayer: number
    resultValuePlayer: number
    counterValueComp: number
    resultComputerValue: number
    showStartButton: boolean
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
const SET_TWO_CARDS_FOR_COMPUTER = 'SET_TWO_CARDS_FOR_COMPUTER'
const GET_ANOTHER_CARD_FOR_COMP = 'GET_ANOTHER_CARD_FOR_COMP'
const SAVE_COMP_VALUE = 'SAVE_COMP_VALUE'
export const initialState: PlayPageType = {
    cards: [{value: 11, image: <img src={aceC} alt={'#'}/>, id: v1()}, {
        value: 2,
        image: <img src={twoC} alt={'#'}/>,
        id: v1()
    },
        {value: 3, image: <img src={threeC} alt={'#'}/>, id: v1()}, {
            value: 4,
            image: <img src={fourC} alt={'#'}/>,
            id: v1()
        },
        {value: 5, image: <img src={fiveC} alt={'#'}/>, id: v1()}, {
            value: 6,
            image: <img src={sixC} alt={'#'}/>,
            id: v1()
        },
        {value: 7, image: <img src={sevenC} alt={'#'}/>, id: v1()}, {
            value: 8,
            image: <img src={eightC} alt={'#'}/>,
            id: v1()
        },
        {value: 9, image: <img src={nineC} alt={'#'}/>, id: v1()}, {
            value: 10,
            image: <img src={tenC} alt={'#'}/>,
            id: v1()
        },
        {value: 2, image: <img src={jackC} alt={'#'}/>, id: v1()}, {
            value: 3,
            image: <img src={queenC} alt={'#'}/>,
            id: v1()
        },
        {value: 4, image: <img src={kingC} alt={'#'}/>, id: v1()}
    ],
    playTable: [],
    counterValuePlayer: 0,
    counterValueComp: 0,
    resultValuePlayer: 0,
    resultComputerValue: 0,
    showStartButton: true
}

export const playReducer = (state: PlayPageType = initialState, action: ActionType) => {
    function getRandomCards(): Array<CardType> {
        const card = state.cards[Math.floor(Math.random() * state.cards.length)]
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

    function getCardFunc() {
        const card = state.cards[Math.floor(Math.random() * state.cards.length)]
        for (let item of state.playTable) {
            if (card.id !== item.id) {
                return card
            } else {
                getCardFunc()
            }
        }
        return card
    }

    switch (action.type) {
        case "SET_TWO_CARDS_TO_PLAY_TABLE":
            newPlayTable()
            return {
                ...state,
                playTable: state.playTable,
                counterValuePlayer: state.counterValuePlayer + state.playTable[0].value + state.playTable[1].value,
                resultValuePlayer: 0,
                resultComputerValue: 0
            }
        case "GET_ANOTHER_CARD":
            const newCard = getCardFunc()
            return {
                ...state,
                playTable: [...state.playTable, newCard],
                counterValuePlayer: state.counterValuePlayer + newCard!.value
            }
        case "SAVE_COUNT_VALUE":
            return {
                ...state,
                resultValuePlayer: state.counterValuePlayer,
                counterValuePlayer: 0,
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
                resultValuePlayer: 0,
                counterValueComp: 0,
                resultComputerValue: 0,
                showStartButton: true
            }
        case "SET_TWO_CARDS_FOR_COMPUTER":
            newPlayTable()
            return {
                ...state,
                playTable: state.playTable,
                counterValueComp: state.counterValuePlayer + state.playTable[0].value + state.playTable[1].value
            }
        case "GET_ANOTHER_CARD_FOR_COMP":
            const newCompCard = getCardFunc()
            return {
                ...state,
                playTable: [...state.playTable, newCompCard],
                counterValueComp: state.counterValueComp + newCompCard.value
            }
        case "SAVE_COMP_VALUE":
            return {
                ...state,
                resultComputerValue: state.counterValueComp,
                counterValueComp: 0
            }
        default:
            return state
    }
}
export const startGame = () => {
    return {type: SET_TWO_CARDS_TO_PLAY_TABLE} as const
}
export const getAnotherCard = () => {
    return {type: GET_ANOTHER_CARD} as const
}
export const stopGame = () => {
    return {type: SAVE_COUNT_VALUE} as const
}
export const toggleShowStartButton = () => {
    return {type: TOGGLE_SHOW_START_BUTTON} as const
}
export const getInitialState = () => {
    return {type: READY_FOR_NEW_GAME} as const
}
export const startComputerGame = () => {
    return {type: SET_TWO_CARDS_FOR_COMPUTER} as const
}
export const getAnotherCardForComp = () => {
    return {type: GET_ANOTHER_CARD_FOR_COMP} as const
}
export const stopCompGame = () => {
    return {type: SAVE_COMP_VALUE} as const
}