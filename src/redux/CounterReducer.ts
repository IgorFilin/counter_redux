type addCountACType = ReturnType<typeof addCountAC>
type addMaxValueACType = ReturnType<typeof addMaxValueAC>
type addMinValueACType = ReturnType<typeof addMinValueAC>
type enterValueAlertACType = ReturnType<typeof enterValueAlertAC>
type resetCountACType = ReturnType<typeof resetSetCountAC>
type setValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>
type setCountHowMinValueACType = ReturnType<typeof setCountHowMinValueAC>

export type AllACType =
    addCountACType
    | addMaxValueACType
    | addMinValueACType
    | enterValueAlertACType
    | resetCountACType
    | setValueFromLocalStorageACType
    | setCountHowMinValueACType


export type CounterReducerStateType = {
    maxValue: number
    minValue: number
    count: number
    enterValueAlert: boolean
}
const initialState: CounterReducerStateType = {
    maxValue: 5,
    minValue: 0,
    count: 0,
    enterValueAlert: false,
}

export function CounterReducer(state: CounterReducerStateType = initialState, action: AllACType) {
    switch (action.type) {
        case 'ADD-COUNT': {
            return {...state, count: state.count + 1}
        }
        case "ADD-MAX-VALUE": {
            return {...state, maxValue: action.value}
        }
        case "ADD-MIN-VALUE": {
            return {...state, minValue: action.value}
        }
        case "CHANGE-ENTER-VALUE": {
            return {...state, enterValueAlert: action.status}
        }
        case "RESET-SET-COUNT": {
            return {...state, count: state.minValue}
        }
        case "SET-VALUE-LOCAL-STORAGE": {
            return {...state, maxValue: +action.maxValue, minValue: +action.minValue}
        }
        case "SET-COUNT-HOW-MIN-VALUE":{
            return {...state,count:+action.minValue}
        }

        default :
            return state
    }
}

export const addCountAC = () => {
    return {type: 'ADD-COUNT'} as const
}
export const addMaxValueAC = (value: number) => {
    return {type: 'ADD-MAX-VALUE', value} as const
}
export const addMinValueAC = (value: number) => {
    return {type: 'ADD-MIN-VALUE', value} as const
}
export const enterValueAlertAC = (status: boolean) => {
    return {type: 'CHANGE-ENTER-VALUE', status} as const
}
export const resetSetCountAC = () => {
    return {type: 'RESET-SET-COUNT'} as const
}
export const setValueFromLocalStorageAC = (maxValue: string, minValue: string) => {
    return {type: 'SET-VALUE-LOCAL-STORAGE', maxValue, minValue} as const
}
export const setCountHowMinValueAC = (minValue: string) => {
    return {type: 'SET-COUNT-HOW-MIN-VALUE', minValue} as const
}

