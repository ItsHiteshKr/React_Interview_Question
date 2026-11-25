import React, { useState } from 'react'

const Column_Table = () => {

    const [rowCount, setRowCount] = useState(2);
    const [columnCount, setColumnCount] = useState(2);



    return (
        <div className="relative flex flex-col items-center justify-center mt-1 gap-3 mb-8">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Column Table Component
            </h1>
            <div className="flex flex-row items-center justify-center gap-3 px-0 md:px-9">
                <p>Rows :: {rowCount}</p>
                <input
                    type="range"
                    min={2}
                    max={8}
                    value={rowCount}
                    onChange={(e) => setRowCount(parseInt(e.target.value))}
                />


                <p>Columns :: {columnCount}</p>
                <input
                    type="range"
                    min={2}
                    max={8}
                    value={columnCount}
                    onChange={(e) => setColumnCount(parseInt(e.target.value))}
                />

            </div>

            <div className="mt-4 overflow-x-auto gap-3">
                {Array.from({ length: rowCount }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {Array.from({ length: columnCount }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                className="mx-0.5 my-0.5 flex h-12 w-12 items-center justify-center border border-gray-600"
                            >
                                {/* Fixed width and height keep every table cell the same size. */}
                                {
                                    // Fill even columns top-to-bottom and odd columns bottom-to-top.
                                    colIndex % 2 === 0
                                        ? colIndex * rowCount + rowIndex + 1
                                        : (colIndex + 1) * rowCount - rowIndex
                                }
                            </div>
                        ))
                        }
                    </div>
                ))
                }
            </div>






        </div>
    )
}

export default Column_Table