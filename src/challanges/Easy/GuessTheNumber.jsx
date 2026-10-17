import React, { useState } from "react";

const GuessTheNumber = () => {

    const [count, setCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState(1);
    const [userNumber, setUserNumber] = useState(1);
    const [message, setMessage] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    const checkGuess = (guess) => {

        const guessNumber = Number(guess);

        if (guess === "") {
            setMessage("Please enter a number.");
            return;
        }

        if (isNaN(guessNumber)) {
            setMessage("Please enter a valid number.");
            return;
        }


        if (guessNumber < 0 || guessNumber > 100) {
            setMessage("Please enter a number between 0 and 100.");
            return;
        }

        if (guessNumber < randomNumber) {
            setCount((prev) => prev + 1);
            setMessage("Your guess is less than the actual number.");
        } else if (guessNumber > randomNumber) {
            setCount((prev) => prev + 1);
            setMessage("Your guess is greater than the actual number.");
        } else {
            setIsGameOver(true);
            setMessage("Congratulations! You guessed the number.");
        }
    };

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(randomNum);
        setCount(0);
        setUserNumber(1);
        setMessage("");
        setIsGameOver(false);
    }


    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Guess The Number Component
            </h1>
            <div className="flex w-full max-w-md flex-col gap-6 rounded-lg border border-gray-300 bg-white px-6 pt-6 pb-2 shadow-md">
                <div className="flex flex-col items-center gap-3">
                    <p className="text-center text-xl text-gray-800">
                        Guess a number between 0 to 100.
                    </p>

                    <input
                        type="number"
                        className="w-full max-w-[220px] rounded-lg border border-gray-300 px-3 py-2 text-center outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        value={userNumber}
                        onChange={(e) => setUserNumber(Number(e.target.value))}
                    />
                </div>

                <div className="gap-2">
                    <div className="flex w-full justify-center gap-4">
                        <button className="rounded-lg bg-red-400 px-6 py-2 text-black transition hover:bg-red-500 cursor-pointer"
                            onClick={() => {
                                generateRandomNumber();
                            }}>
                            Reset
                        </button>
                        <button className="rounded-lg bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
                            onClick={() => {
                                checkGuess(userNumber);
                            }}
                            disabled={isGameOver}
                        >

                            Check
                        </button>
                    </div>

                    <p className="text-center text-md text-gray-800 mt-2">
                        Number of attempts: <span className="font-semibold">{count}</span>
                    </p>
                </div>
            </div>

            <div>
                <p className="text-center text-md text-gray-800">
                    {message}
                </p>

            </div>
        </div>

    );
};

export default GuessTheNumber;
