import React from 'react'

const Result = ({ score, totalScore, totalQuestions }) => {
    return (
        <div className="text-center  ">
            <h2 className="text-2xl py-1.5 font-semibold text-white border border-[#54d1da] border-3px bg-[#54d1da] mb-3 opacity-85 rounded-lg">Result</h2>

            <table className="border-collapse border border-[#54d1da] text-white bg-gray-400 opacity-80 rounded-md w-full">
                <tbody className="text-start">
                    <tr className="border border-[#54d1da]">
                        <td className="border border-[#54d1da] px-6 py-3">Total Questions</td>
                        <td className="border border-[#54d1da]   px-6 py-3 text-right">
                            {totalQuestions}
                        </td>
                    </tr>

                    <tr className="border border-[#54d1da]">
                        <td className="border border-[#54d1da] px-6 py-3">Total Score</td>
                        <td className="border border-[#54d1da] px-6 py-3 text-right">
                            {score}
                        </td>
                    </tr>

                    <tr className="border border-[#54d1da]">
                        <td className="border border-[#54d1da] px-6 py-3">Correct Answers</td>
                        <td className="border border-[#54d1da] px-6 py-3 text-right">
                            {score / 5}
                        </td>
                    </tr>

                    <tr className="border border-[#54d1da]">
                        <td className="border border-[#54d1da] px-6 py-3">Wrong Answers</td>
                        <td className="border border-[#54d1da] px-6 py-3 text-right">
                            {(totalScore - score) / 5}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Result