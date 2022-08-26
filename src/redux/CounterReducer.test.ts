// import {
//     addCountAC,
//     addMaxValueAC,
//     addMinValueAC,
//     CounterReducer,
//     CounterReducerStateType,
//     enterValueAlertAC
// } from "./CounterReducer";
//
// let initialState:CounterReducerStateType
// beforeEach(()=>{
//     initialState = {
//         maxValue:5,
//         minValue:0,
//         count:0,
//         enterValueAlert:false,
//     }
// })
//
// test('should added count',()=>{
//
//     let action = addCountAC()
//
//     let endState = CounterReducer(initialState,action)
//
//    expect(endState.count).toBe(1)
//    expect(endState.maxValue).toBe(5)
//    expect(endState.minValue).toBe(0)
//
// })
// test('should added maxValue',()=>{
//
//     let action = addMaxValueAC(10)
//     let endState = CounterReducer(initialState,action)
//
//    expect(endState.count).toBe(0)
//    expect(endState.maxValue).toBe(10)
//    expect(endState.minValue).toBe(0)
//
// })
// test('should added minValue',()=>{
//
//     let action = addMinValueAC(2)
//     let endState = CounterReducer(initialState,action)
//
//    expect(endState.count).toBe(0)
//    expect(endState.).toBe(5)
//    expect(endState.minValue).toBe(2)
//
// })
// test('should changed enterValueAlert',()=>{
//
//     let action = enterValueAlertAC()
//     let endState = CounterReducer(initialState,action)
//
//    expect(endState.count).toBe(0)
//    expect(endState.maxValue).toBe(5)
//    expect(endState.minValue).toBe(0)
//    expect(endState.enterValueAlert).toBe(true)
//
// })
export default {}