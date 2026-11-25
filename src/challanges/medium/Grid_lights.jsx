import React, { useState } from 'react'

const Grid_lights = () => {

    const [gridcount, setGridcount] = useState(3);
    const [delay, setDelay] = useState(300);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectedCells, setSelectedCells] = useState([]);

    const boardSize = gridcount * gridcount;

    const handleCellClick = (index) => {
        if (selectedCells.includes(index)) {
            return;
        }

        const nextSelectedCells = [...selectedCells, index];
        setSelectedCells(nextSelectedCells);

        if (nextSelectedCells.length === boardSize) {
            nextSelectedCells.forEach((_, position) => {
                setTimeout(() => {
                    setSelectedCells((cells) => cells.slice(0, -1));
                }, delay * (position + 1));
            });
        }
    };

    return (
        <div className="relative mt-1 mb-8 flex flex-col items-center justify-center gap-3">
            <h1 className="border-b-2 border-gray-600 pb-1 text-3xl font-bold">
                Grid Lights Component
            </h1>
            <div className="flex flex-col items-center justify-center gap-3 px-0 md:px-9">
                <p className="text-center text-gray-600">
                    Click on cells to select them. Once all cells are selected, they will be unselected one by one in the reverse order they were selected.
                </p>
                <div
                    className="grid gap-3"
                    // Tailwind cannot detect a dynamically-created grid-cols-{value} class.
                    style={{ gridTemplateColumns: `repeat(${gridcount}, minmax(0, 1fr))` }}
                >
                    {Array.from({ length: boardSize }).map((_, index) => (
                        <div
                            key={index}
                            className={`flex h-20 w-20 items-center justify-center rounded-md border-2 border-gray-600 ${selectedCells.includes(index) ? 'bg-blue-500' : 'bg-white'
                                } cursor-pointer`}
                            onClick={() => handleCellClick(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>

            {/* Keep the header and controls inside one panel so the box grows downward. */}
            <div className="fixed right-4 top-4 z-50 w-72 overflow-hidden rounded-lg bg-gray-700 shadow-lg">
                <div className="flex w-full items-center justify-start gap-1 px-3 py-2 text-white">

                    <button
                        className=" text-xl cursor-pointer  "
                        onClick={() => setIsModelOpen((isOpen) => !isOpen)}>
                        {isModelOpen ? '↑' : '↓'}
                    </button>
                    <p>config</p>

                </div>


                {isModelOpen && (
                    // The controls are rendered only when the config panel is open.
                    <div className="flex w-full flex-col items-center justify-center gap-3 border-t border-gray-600 bg-gray-800 p-3 text-white transform transition-all duration-1000 ease-in-out">
                        <div className="flex items-center justify-between gap-3">
                            <p>gridsize</p>
                            <input
                                type="range"
                                min="2"
                                max="5"
                                value={gridcount}
                                onChange={(event) => {
                                    setGridcount(Number(event.target.value));
                                    setSelectedCells([]);
                                }}
                            />
                            <span className="h-6 w-10 rounded-md bg-gray-600 pr-2 py-1 text-end text-xs text-white">
                                {gridcount}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-5">
                            <p>delay</p>
                            <input
                                type="range"
                                min="100"
                                max="700"
                                value={delay}
                                onChange={(event) => setDelay(Number(event.target.value))}
                            />
                            <span className="h-6 w-10 rounded-md bg-gray-600 py-1 pr-2 text-end text-xs text-white">
                                {delay}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Grid_lights
