import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBlock} from "./SettingsBlock/SettingsBlock";
import {useSelector} from "react-redux";
import {StateAppType} from "./redux/store";
import {CounterReducerStateType,} from "./redux/CounterReducer";


function App() {
    console.log('render App')
    const state = useSelector<StateAppType, CounterReducerStateType>(state => state.counter)

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
