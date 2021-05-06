import {drawResultGame, initialState, playReducer, startGame, stopCompGame, TYPES_OF_ACTIONS} from "./play-reducer";
import {cardsArray} from "../Components/cardsArray";

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
    let updateNewState = playReducer(newState, {type: TYPES_OF_ACTIONS.GET_ANOTHER_CARD, payload: "player"})
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
    let newState = playReducer(state, stopCompGame())
    expect(newState.stakePlayer).toBe(1000)
    expect(newState.stakeComputer).toBe(10000)
})
test('game should be start', () => {
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
    console.log(newState)
    expect(newState.playTable.length).toBe(2)
})


