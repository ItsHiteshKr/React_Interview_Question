import React, { useState } from 'react'

const buttonStyle1 = "rounded-2xl border border-gray-300 font-bold text-white px-3 py-4 bg-[#497174] hover:bg-[#c0d8d9] hover:text-black transition-colors duration-200"

const buttonStyle2 = "rounded-2xl border border-gray-300 font-bold text-white px-3 py-4 bg-[#eb6440] hover:bg-[#c0d8d9] hover:text-black transition-colors duration-200"

const Calculator = () => {
    const [number, setNumber] = useState('0')
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);


    const clear = () => {
        setNumber('')
        setOperation('')
        setResult(null)
    }
    const deleteNumber = () => { }

    const negative = (number) => {
        // if (number > 0) {
        //     setNumber(-Math.abs((stoi(number))))
        // }
    }

    const calculate = () => { }



    return (
        <div>
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Calculator Component
            </h1>
            <div className="mt-8 rounded-lg border border-gray-300 p-4 bg-[#d6e4e5] space-y-2">
                <div className="flex items-center justify-end w-full h-20 px-4 mt-6 text-right border border-gray-300 rounded-lg bg-black text-white">
                    <p>{operation}</p>
                    <p>{result !== null ? result : number}</p>
                </div>
                <div className=" grid grid-cols-4 gap-2  bg-[#d6e4e5]">
                    <button onClick={() => clear()} className={buttonStyle2}>
                        Clear
                    </button>
                    <button onClick={() => deleteNumber()} className={buttonStyle2}>
                        Del
                    </button>
                    <button
                        onClick={() => setOperation('^')}
                        className={buttonStyle2}
                    >
                        x<sup>y</sup>
                    </button>
                    <button
                        onClick={() => setOperation('^2')}
                        className={buttonStyle2}
                    >
                        x<sup>2</sup>
                    </button>
                    <button onClick={() => setNumber('1')}
                        className={buttonStyle1}>
                        1
                    </button>
                    <button onClick={() => setNumber('2')} className={buttonStyle1}>
                        2
                    </button>
                    <button onClick={() => setNumber('3')} className={buttonStyle1}>
                        3
                    </button>
                    <button onClick={() => setOperation('+')} className={buttonStyle2}>
                        +
                    </button>
                    <button onClick={() => setNumber('4')} className={buttonStyle1}>
                        4
                    </button>
                    <button onClick={() => setNumber('5')} className={buttonStyle1}>
                        5
                    </button>
                    <button onClick={() => setNumber('6')} className={buttonStyle1}>
                        6
                    </button>
                    <button onClick={() => setOperation('/')} className={buttonStyle2}>
                        /
                    </button>
                    <button onClick={() => setNumber('7')} className={buttonStyle1}>
                        7
                    </button>
                    <button onClick={() => setNumber('8')} className={buttonStyle1}>
                        8
                    </button>
                    <button onClick={() => setNumber('9')} className={buttonStyle1}>
                        9
                    </button>
                    <button onClick={() => setOperation('-')} className={buttonStyle2}>
                        –
                    </button>
                    <button onClick={() => setNumber('0')} className={buttonStyle1}>
                        0
                    </button>
                    <button onClick={() => setNumber('.')} className={buttonStyle1}>
                        .
                    </button>
                    <button
                        onClick={() => setOperation('√')}
                        className={buttonStyle2}
                    >
                        √
                    </button>
                    <button onClick={() => setOperation('*')} className={buttonStyle2}>
                        ×
                    </button>

                    <button onClick={() => calculate()} className={buttonStyle2}>
                        =
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Calculator