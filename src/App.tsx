import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBlock} from "./SettingsBlock/SettingsBlock";
import {useDispatch, useSelector} from "react-redux";
import {StateAppType} from "./redux/store";
import {CounterReducerStateType, setCountHowMinValueAC, setValueFromLocalStorageAC,} from "./redux/CounterReducer";


function App() {
    const state = useSelector<StateAppType, CounterReducerStateType>(state => state.counter)
    const dispatch = useDispatch()

    useEffect(()=>{
        let maxValue = JSON.parse(localStorage.getItem('counterMaxValue')!)
        let minValue = JSON.parse(localStorage.getItem('counterMinValue')!)
        dispatch(setCountHowMinValueAC(minValue))
        dispatch(setValueFromLocalStorageAC(maxValue,minValue))
    },[])

    const {count, maxValue, minValue, enterValueAlert} = state

    const inputNumberError = state.minValue < 0 || state.maxValue < 0 || state.minValue === state.maxValue || state.maxValue < state.minValue;

    return (
        <div className="App">
            <SettingsBlock
                inputNumberError={inputNumberError}
                enterValueAlert={enterValueAlert}
                minValue={minValue}
                maxValue={maxValue}
            />
            <Counter
                inputNumberError={inputNumberError}
                count={count}
                enterValueAlert={enterValueAlert}
                isMaxValueError={count === maxValue}
                isMinValueError={count === minValue}
            />
        </div>
    );
}

export default App;
