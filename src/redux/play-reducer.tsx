import React from 'react'
import {cardsArray} from "../Components/cardsArray";

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
    resultCardsPlayer:Array<CardType>
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
    cards: cardsArray,
    playTable: [],
    resultCardsPlayer:[],
    counterValuePlayer: 0,
    counterValueComp: 0,
    resultValuePlayer: 0,
    resultComputerValue: 0,
    showStartButton: true
}

export const playReducer = (state: PlayPageType = initialState, action: ActionType) => {

    function getRandomCards(): Array<CardType> {
        function shuffleCards():CardType {
            const card = state.cards[Math.floor(Math.random() * state.cards.length)]
            if(card.value === 11){
                if(state.counterValueComp === 11 || state.counterValuePlayer === 11){
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

    function getCardFunc() {
        let remainderCards:CardType[] = state.cards
        for(let i = 0; i < state.playTable.length; i++){
            remainderCards = remainderCards.filter(c => c.id !== state.playTable[i].id)
        }
        const card = remainderCards[Math.floor(Math.random() * remainderCards.length)]
        if(card.value === 11){
            if(state.counterValueComp > 11 || state.counterValuePlayer > 11){
                card.value = 1
                return card
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
                resultCardsPlayer:[],
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
                resultCardsPlayer: [...state.playTable],
                playTable: []
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
                counterValueComp: state.counterValueComp + state.playTable[0].value + state.playTable[1].value
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
                counterValueComp: 0,
                playTable: []
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