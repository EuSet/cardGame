import {initialState, playReducer} from "./play-reducer";

test('get random cards', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE"})
    expect(newState.playTable.length).toBe(2)
    expect(newState.playTable[0]!.value).not.toBe(0)
})
test('get cards value', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE"})
    let newCount = newState.playTable[0]!.value += newState.playTable[1]!.value
    expect(newState.counterValuePlayer).not.toBe(0)
    expect(newState.counterValuePlayer).toEqual(newCount)
})

test('count cards value', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE"})
    let updateNewState = playReducer(newState, {type: "GET_ANOTHER_CARD"})
    expect(updateNewState.playTable.length).toBe(3)
})

test('save value', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE"})
    let updateNewState = playReducer(newState, {type: "SAVE_COUNT_VALUE"})
    expect(updateNewState.resultValuePlayer).toEqual(updateNewState.counterValuePlayer)
    let anotherUpdateNewState = playReducer(updateNewState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE"})
    expect(anotherUpdateNewState.resultValuePlayer).not.toEqual(anotherUpdateNewState.counterValuePlayer)
})

test('not the same card', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE"})
    expect(newState.playTable[0]).not.toEqual(newState.playTable[1])
})
