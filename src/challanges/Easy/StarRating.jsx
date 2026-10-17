import React, { useState } from 'react'

const StarRating = () => {

    const [rating, setRating] = useState(0);


    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Star Rating Component
            </h1>

            <div>

            </div>

            <div>

            </div>
        </div>
    )
}

export default StarRating