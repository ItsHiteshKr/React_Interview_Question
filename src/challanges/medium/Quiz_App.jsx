import React, { useState } from 'react'
import Question from './quiz_App/Question'
import Result from './quiz_App/Result'

import Quiz from './quiz_App/quiz_ques.json'

const Quiz_App = () => {
    const [showResult, setShowResult] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [score, setScore] = useState(0)

    const questions = Quiz.quiz.questions
    const currentQuestion = questions[currentQuestionIndex]

    const handleNext = () => {
        if (selectedOption === null) {
            return
        }

        // Add the score only when the currently selected answer matches the correct answer.
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore((currentScore) => currentScore + Quiz.quiz.perQuestionScore)
        }

        // Show result after the last question instead of incrementing beyond the array.
        if (currentQuestionIndex === questions.length - 1) {
            setShowResult(true)
            return
        }

        setCurrentQuestionIndex((currentIndex) => currentIndex + 1)
        setSelectedOption(null)
    }

    return (
        <div className="relative mb-8 mt-1 flex w-full max-w-2xl flex-col items-center justify-center gap-3 px-4 sm:px-6">
            <h1 className="border-b-2 border-gray-600 pb-1 text-3xl font-bold">
                Quiz Component
            </h1>

            <div className="flex flex-col items-center justify-center gap-3 py-4 px-6 bg-blue-300 rounded-md shadow-lg">

                {!showResult ? (
                    <div>
                        <div className="flex flex-row items-center justify-between gap-3 p-2 text-gray-100 text-md ">
                            <p>
                                TOPIC: {Quiz.quiz.topic}
                            </p>
                            <p>
                                {currentQuestionIndex + 1} / {Quiz.quiz.questions.length}
                            </p>

                        </div>
                        <Question
                            question={currentQuestion}
                            selectedOption={selectedOption}
                            onSelectOption={setSelectedOption}
                        />

                        <div className="mt-5 flex w-full justify-end">
                            <button
                                disabled={selectedOption === null}
                                className={`rounded px-2 py-1 font-bold 
                                    ${selectedOption === null
                                        ? 'cursor-not-allowed  bg-gray-500  text-white'
                                        : 'cursor-pointer bg-gray-600 text-white'
                                    }`}
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                ) : (
                    <Result
                        score={score}
                        totalScore={questions.length * Quiz.quiz.perQuestionScore}
                        totalQuestions={questions.length}
                    />
                )}


            </div>
        </div>
    )
}

export default Quiz_App