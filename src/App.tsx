import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBlock} from "./SettingsBlock/SettingsBlock";
import {useDispatch, useSelector} from "react-redux";
import {StateAppType} from "./redux/store";
import {
    addCountAC,
    addMaxValueAC, addMinValueAC,
    CounterReducerStateType,
    enterValueAlertAC,
    resetSetCountAC
} from "./redux/CounterReducer";


function App() {
    debugger
    // const [minValue, setMinValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(5)
    // const [count, setCount] = useState<number>(minValue)
    // const [enterValueAlert, setEnterValueAlert] = useState(false)
    // const isMaxValueError = count === maxValue
    // const isMinValueError = count === minValue


    // useEffect(() => getLocalStorage(), [])

    // const getLocalStorage = () => {
    //     const newMaxValue = localStorage.getItem('maxValues')
    //     const newMinValue = localStorage.getItem('minValues')
    //     if (newMaxValue) {
    //         setMaxValue(JSON.parse(newMaxValue))
    //     }
    //     if (newMinValue) {
    //         setMinValue((JSON.parse(newMinValue)))
    //         setCount((JSON.parse(newMinValue)))
    //     }
    // }

    const state = useSelector<StateAppType,CounterReducerStateType>(state => state.counter)
    const dispatch = useDispatch()

    const addCount = () => {
        dispatch(addCountAC())
    }

    const resetCount = () => {
        dispatch(resetSetCountAC())
    }
    const changeMaxValue = (e: number) => {
        // setMaxValue(e)
        // setEnterValueAlert(true)
        dispatch(addMaxValueAC(e))
        dispatch(enterValueAlertAC(true))
    }
    const changeMinValue = (e: number) => {
        // setMinValue(e)
        // setEnterValueAlert(true)
        dispatch(addMinValueAC(e))
        dispatch(enterValueAlertAC(true))
    }
    const setChangesValue = () => {
        // localStorage.setItem('maxValues', JSON.stringify(maxValue))
        // localStorage.setItem('minValues', JSON.stringify(minValue))
        // setCount(minValue)
        // setEnterValueAlert(false)
        dispatch(resetSetCountAC())
        dispatch(enterValueAlertAC(false))
    }
    const inputNumberError = state.minValue < 0 || state.maxValue < 0 || state.minValue === state.maxValue || state.maxValue < state.minValue;
    const isMaxValueError = state.count === state.maxValue
    const isMinValueError = state.count === state.minValue
    return (
        <div className="App">
            <SettingsBlock
                inputNumberError={inputNumberError}
                enterValueAlert={state.enterValueAlert}
                setChangesValue={setChangesValue}
                minValue={state.minValue}
                maxValue={state.maxValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
            />
            <Counter
                inputNumberError={inputNumberError}
                enterValueAlert={state.enterValueAlert}
                count={state.count}
                addCount={addCount}
                resetCount={resetCount}
                isMaxValueError={isMaxValueError}
                isMinValueError={isMinValueError}
            />
        </div>
    );
}

export default App;
