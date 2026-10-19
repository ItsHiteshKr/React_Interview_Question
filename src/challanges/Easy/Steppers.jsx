import React, { useState } from 'react'

import StepperData from './StepperData.json'

const Steppers = () => {

    const [activeStep, setActiveStep] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const currentStep = StepperData[activeStep]

    const handleNext = () => {
        if (activeStep < StepperData.length - 1) {
            setActiveStep((prev) => prev + 1)
            setIsComplete(false)
        }
    }

    const handlePrevious = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1)
            setIsComplete(false)
        }
    }

    const handleFinish = () => {
        setIsComplete(true)
    }

    return (
        <section className="w-full max-w-3xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                    Stepper Component
                </h1>
            </div>


            <div className="overflow-hidden mt-6 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                <div className="px-5 py-8 sm:px-8">
                    <div className="flex items-start">
                        {StepperData.map((step, index) => {
                            const isActive = index === activeStep
                            const isCompleted = index < activeStep || isComplete

                            return (
                                <React.Fragment key={step.id}>
                                    <div className="flex min-w-0 flex-1 flex-col items-center">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors ${isActive || isCompleted
                                                ? 'border-green-600 bg-green-600 text-white'
                                                : 'border-slate-300 bg-white text-slate-500'
                                                }`}
                                        >
                                            {isCompleted && !isActive ? '✓' : index + 1}
                                        </div>
                                        <span
                                            className={`mt-3 text-start text-nowrap text-xs font-semibold sm:text-sm ${isActive ? 'text-green-700' : 'text-slate-500'
                                                }`}
                                        >
                                            {step.name}
                                        </span>
                                    </div>
                                    {index < StepperData.length - 1 && (
                                        <div
                                            className={`mt-5 h-0.5 min-w-8 flex-1 transition-colors sm:min-w-8 ${index < activeStep || isComplete
                                                ? 'bg-green-600'
                                                : 'bg-slate-200'
                                                }`}
                                        />
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </div>

                    {currentStep && !isComplete && (
                        <div className="mt-3 text-center">
                            <p className="mt-2 text-md font-semibold leading-6 text-slate-600">
                                {currentStep.Component}
                            </p>
                        </div>
                    )}

                    {isComplete && (
                        <div className="mt-2 text-center">

                            <h2 className="mt-3 text-xl font-bold text-emerald-800">
                                Order Delivered successfully!🎉
                            </h2>
                        </div>
                    )}

                    <div className="mt-2 flex justify-center items-center gap-8">
                        <button
                            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition bg-slate-100 hover:bg-slate-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={handlePrevious}
                            disabled={activeStep === 0}
                        >
                            Previous
                        </button>
                        {activeStep < StepperData.length - 1 && (
                            <button
                                className="rounded-lg bg-slate-100  border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-gray-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        )}
                        {activeStep === StepperData.length - 1 && (
                            <button
                                className="rounded-lg bg-slate-100 border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                                onClick={handleFinish}
                                disabled={isComplete}
                            >
                                Finish
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steppers