import {combineReducers, legacy_createStore} from "redux";
import {CounterReducer} from "./CounterReducer";


const rootReducer = combineReducers({
    counter: CounterReducer
})

export const store = legacy_createStore(rootReducer)

export type StateAppType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
