import React from 'react'

const Question = ({ question, selectedOption, onSelectOption }) => {

    // console.log("question", question);

    return (
        <div>
            <h1 className="text-xl text-white bg-[#54d1da] font-semibold word-wrap px-4 pt-3 pb-8 rounded-md border border-green-400 ">{question.question}</h1>
            <ul className="flex flex-col gap-2 mt-2 mb-3">
                {question.choices.map((option, optionIndex) => (
                    <li key={optionIndex}
                        onClick={() => onSelectOption(option)}
                        className={`text-white bg-[#8E7DBE] opacity-75 p-2 rounded-md border border-gray-600 cursor-pointer
                            ${selectedOption === option ? 'bg-red-500' : 'hover:bg-blue-400'} `}

                    >
                        {option}
                    </li>
                ))}
            </ul>

        </div>


    )
}

export default Question