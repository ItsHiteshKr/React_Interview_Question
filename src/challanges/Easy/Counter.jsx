import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0);
    const [step, setStep] = useState(1);

    const incrementHandler = () => {
        setValue((prevValue) => prevValue + step);
    }

    const decrementHandler = () => {
        setValue((prevValue) => prevValue - step);
    }

    const changeStephandler = (input) => {
        if (input.target.value === '') {
            setStep(1);
            return;
        }
        setStep(parseInt(input.target.value));
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">Welcome to the Counter App</h1>
            <h2 className="text-2xl font-semibold">{value}</h2>
            <div className="flex gap-4 space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                    onClick={incrementHandler}
                >+</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
                    onClick={decrementHandler}
                >-</button>
            </div>
            <div className="flex flex-row items-center gap-2">
                <p>Increment/Decrement by </p>
                <input type="number" className="border border-gray-700 rounded px-2 py-1 w-20"
                    defaultValue={1}
                    onChange={changeStephandler}
                />
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
                onClick={() => {
                    setValue(0);
                }}
            >Reset</button>


            <h3 className="text-md text-gray-700">Keyboard shortcuts: + to increment, - to decrement, Page Up/Down to change step value</h3>
        </div>
    )
}

export default Counter