import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";



const rootReducer = combineReducers({
    counter: CounterReducer
})



export const store = createStore(rootReducer)

export type StateAppType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    localStorage.setItem('counterMaxValue', JSON.stringify(store.getState().counter.maxValue))
    localStorage.setItem('counterMinValue', JSON.stringify(store.getState().counter.minValue))
})


// @ts-ignore
window.store = store
