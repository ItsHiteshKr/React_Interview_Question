import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;


    useEffect(() => {
        if (!isRunning) {
            return undefined;
        }

        const interval = setInterval(() => {
            setTime((currentTime) => currentTime + 16);
        }, 16);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="relative mb-8 mt-1 flex w-full max-w-2xl flex-col items-center justify-center gap-3 px-4 sm:px-6">
            <h1 className="border-b-2 border-gray-600 pb-1 text-3xl font-bold">
                Stopwatch Component
            </h1>

            <div className="flex flex-col items-center justify-center gap-3 p-2 bg-gray-300 rounded-full h-50 w-50 sm:h-40 sm:w-40 md:h-62 md:w-62 shadow-lg">
                <p className="text-3xl font-bold text-purple-500">Stopwatch</p>
                <p className="text-3xl font-bold text-[#b4161b]">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:{milliseconds.toString().padStart(3, '0')}</p>

                <div className="flex gap-2 ">
                    <button className={`bg-green-500 text-white px-2 py-1 uppercase rounded-lg hover:bg-green-600 transition duration-300 ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={handleStart}
                    >
                        Start
                    </button>

                    <button className={`bg-yellow-500 text-white px-2 py-1 uppercase rounded-lg hover:bg-yellow-600 transition duration-300 ${isRunning ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                        onClick={handlePause}
                    >
                        Pause
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 uppercase rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>


            </div>





        </div>
    )
}

export default StopWatch