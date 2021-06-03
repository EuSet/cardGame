import {initialState, playReducer, TYPES_OF_ACTIONS} from "./play-reducer";
import {cardsArray} from "../../Components/Common/cardsArray";
import {
    drawResultGame, getAnotherCard,
    getInitialState,
    startComputerGame,
    startGame,
    stopCompGame,
    stopGame
} from "./play-reducer-actions";

test('get random cards', () => {
    let newState = playReducer(initialState, {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: "player"})
    expect(newState.playTable.length).toBe(2)
    expect(newState.playTable[0]!.value).not.toBe(0)
})
test('get cards value', () => {
    let newState = playReducer(initialState, {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: "player"})
    let newCount = newState.playTable[0].value += newState.playTable[1].value
    expect(newState.counterValuePlayer).not.toBe(0)
    expect(newState.counterValuePlayer).toEqual(newCount)
})

test('count cards value', () => {
    let newState = playReducer(initialState, {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload:"player" })
    let updateNewState = playReducer(newState, getAnotherCard())
    expect(updateNewState.playTable.length).toBe(3)
})

test('save value', () => {
    let newState = playReducer(initialState, {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: "player"})
    let updateNewState = playReducer(newState, {type: TYPES_OF_ACTIONS.SAVE_COUNT_VALUE, payload: "player"})
    let anotherUpdateNewState = playReducer(updateNewState, {type: TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: "player"})
    expect(anotherUpdateNewState.resultValuePlayer).not.toEqual(anotherUpdateNewState.counterValuePlayer)
})

test('not the same card', () => {
    let newState = playReducer(initialState, {type:TYPES_OF_ACTIONS.SET_TWO_CARDS_TO_PLAY_TABLE, payload: "player"})
    expect(newState.playTable[0]).not.toEqual(newState.playTable[1])
})
test('result game - draw', () => {
    let state = {
        cards: cardsArray,
        playTable: [],
        counterValuePlayer: 0,
        counterValueComp: 0,
        resultValuePlayer: 0,
        resultComputerValue: 0,
        showStartButton: true,
        stakePlayer:990,
        stakeComputer:9990,
        bank:20
    }
    let newState = playReducer(state, drawResultGame())
    expect(newState.stakePlayer).toBe(1000)
    expect(newState.stakeComputer).toBe(10000)
})
test('result game should be draw', () => {
    let state = {
        cards: cardsArray,
        playTable: [],
        counterValuePlayer: 0,
        counterValueComp: 0,
        resultValuePlayer: 17,
        resultComputerValue: 17,
        showStartButton: true,
        stakePlayer:990,
        stakeComputer:9990,
        bank:20
    }
    let newState = playReducer(state, drawResultGame())
    expect(newState.stakePlayer).toBe(1000)
    expect(newState.stakeComputer).toBe(10000)
})
test('aces value should be 11 before start new game', () => { // change cardsArray on 4 aces
    let state = {
        cards: cardsArray,
        playTable: [],
        counterValuePlayer: 0,
        counterValueComp: 0,
        resultValuePlayer: 0,
        resultComputerValue: 0,
        showStartButton: true,
        stakePlayer:990,
        stakeComputer:9990,
        bank:20
    }
    let newState = playReducer(state, startGame())
    let elseNewState = playReducer(newState, stopGame())
    let elseNewState1 = playReducer(elseNewState, startComputerGame())
    let elseNewState2 = playReducer(elseNewState1, stopCompGame())
    let elseNewState3 = playReducer(elseNewState2, drawResultGame())
    let endState = playReducer(elseNewState3, getInitialState())
    console.log(endState)
    expect(newState.playTable.length).toBe(2)
})

test('get another card for comp', () => {
    let newState = playReducer(initialState, startComputerGame())
    let updateNewState = playReducer(newState, getAnotherCard())
    console.log(updateNewState.playTable)
    expect(updateNewState.playTable[3]).toBeUndefined()
})


