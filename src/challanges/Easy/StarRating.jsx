import React, { useState } from 'react'

const Stars = [1, 2, 3, 4, 5];

const StarRating = () => {

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);


    const handleRating = (index) => {
        setRating(index);
    }

    const handleMouseEnter = (value) => {
        setHoverRating(value + 1);
    }
    const handleMouseLeave = () => {
        setHoverRating(0);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">

            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Star Rating Component
            </h1>

            <div
                className="flex items-center gap-0.5 text-yellow-500 "
                role="radiogroup"
            >
                {Stars.map((star, index) => (
                    <button
                        key={index}
                        className="text-2xl cursor-pointer "
                        role="radio"
                        onClick={() => handleRating(star)}
                        aria-label={`Rate ${star} stars`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {star <= (hoverRating || rating) ? '★' : '☆'}
                    </button>
                ))}
            </div>

            <p>
                {rating > 0 && `You have rated ${rating} out of ${Stars.length} stars.`}
            </p>

        </div>
    )
}

export default StarRating