import {initialState, playReducer} from "./play-reducer";

test('get random cards', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE", payload: "player"})
    expect(newState.playTable.length).toBe(2)
    expect(newState.playTable[0]!.value).not.toBe(0)
})
test('get cards value', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE", payload: "player"})
    let newCount = newState.playTable[0].value += newState.playTable[1].value
    expect(newState.counterValuePlayer).not.toBe(0)
    expect(newState.counterValuePlayer).toEqual(newCount)
})

test('count cards value', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE", payload:"player" })
    let updateNewState = playReducer(newState, {type: "GET_ANOTHER_CARD", payload: "player"})
    expect(updateNewState.playTable.length).toBe(3)
})

test('save value', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE", payload: "player"})
    let updateNewState = playReducer(newState, {type: "SAVE_COUNT_VALUE", payload: "player"})
    console.log(updateNewState.resultCardsPlayer.length)
    expect(updateNewState.resultCardsPlayer).not.toBe([])
    let anotherUpdateNewState = playReducer(updateNewState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE", payload: "player"})
    expect(anotherUpdateNewState.resultValuePlayer).not.toEqual(anotherUpdateNewState.counterValuePlayer)
})

test('not the same card', () => {
    let newState = playReducer(initialState, {type: "SET_TWO_CARDS_TO_PLAY_TABLE", payload: "player"})
    expect(newState.playTable[0]).not.toEqual(newState.playTable[1])
})


