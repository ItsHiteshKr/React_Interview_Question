import React, { useState, useEffect } from 'react'

// Each light stays active for its duration before moving to the next light.
const trafficLightConfig = {
    red: {
        id: 1,
        duration: 5000,
        next: 'green',
    },
    green: {
        id: 3,
        duration: 3000,
        next: 'yellow',
    },
    yellow: {
        id: 2,
        duration: 2000,
        next: 'red',
    },
};

const Traffic_Lights = () => {

    const [activeLight, setActiveLight] = useState('red');
    const [currentDuration, setCurrentDuration] = useState(0);

    useEffect(() => {
        const currentLightConfig = trafficLightConfig[activeLight];
        setCurrentDuration(currentLightConfig.duration);

        // Decrease the visible duration every second while the light is active.
        const countdown = setInterval(() => {
            setCurrentDuration((remaining) => Math.max(remaining - 1000, 0));
        }, 1000);

        // Change to the next light after the configured duration.
        const timer = setTimeout(() => {
            setActiveLight(currentLightConfig.next);
        }, currentLightConfig.duration);

        // Clear both timers before starting them again for the next light.
        return () => {
            clearInterval(countdown);
            clearTimeout(timer);
        };

    }, [activeLight]);


    return (
        <div className="flex flex-col items-center justify-center gap-4 pb-8">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Traffic Lights Component
            </h1>
            <div className=" border w-35 border-gray-300 py-4 px-0 bg-black space-y-4 rounded-4xl">

                <div className={`w-24 h-24 rounded-full  mx-auto ${activeLight === 'red' ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                <div className={`w-24 h-24 rounded-full  mx-auto ${activeLight === 'yellow' ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
                <div className={`w-24 h-24 rounded-full  mx-auto ${activeLight === 'green' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            </div>
            <p>
                {Math.ceil(currentDuration / 1000)} Seconds
            </p>
        </div>
    )
}

export default Traffic_Lights