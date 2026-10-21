import React, { useEffect, useState } from 'react'

const Toast_Popup = () => {
    const [istop, setIsTop] = useState(true)
    const [isleft, setIsLeft] = useState(true)
    const [message, setMessage] = useState('This is a toast message!')
    const [messageType, setMessageType] = useState('success')
    const [duration, setDuration] = useState(1000)
    const [toast, setToast] = useState(null)

    useEffect(() => {
        if (!toast) {
            return undefined
        }

        const timer = setTimeout(() => {
            setToast(null)
        }, duration)

        return () => clearTimeout(timer)
    }, [toast, duration])

    const toastColor = {
        normal: 'bg-slate-400',
        success: 'bg-green-200',
        error: 'bg-red-300',
        warning: 'bg-amber-300',
        info: 'bg-blue-200',
    }
    const toastIcon = {
        normal: 'ℹ️',
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️',
    }

    return (
        <div className="relative flex w-full max-w-xl flex-col items-center justify-center gap-1 pb-8">
            <h1 className="border-b-2 border-gray-600 pb-1 text-3xl font-bold">
                ToastPopup Component
            </h1>

            <div className="mt-1 flex w-full flex-col space-y-3 px-4">
                <select
                    className="rounded-md border border-gray-500 p-2"
                    value={isleft ? 'left' : 'right'}
                    onChange={(event) => setIsLeft(event.target.value === 'left')}
                >
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>

                <select
                    className="rounded-md border border-gray-500 p-2"
                    value={istop ? 'top' : 'bottom'}
                    onChange={(event) => setIsTop(event.target.value === 'top')}
                >
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>

                <select
                    className="rounded-md border border-gray-500 p-2"
                    value={messageType}
                    onChange={(event) => setMessageType(event.target.value)}
                >
                    <option value="normal">Normal</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                </select>

                <input
                    type="text"
                    className="rounded-md border border-gray-500 p-2"
                    placeholder="This is a toast message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />

                <div className="mx-3 flex flex-row gap-2">
                    <p>Duration</p>
                    <input
                        type="range"
                        min={1000}
                        max={8000}
                        step={1000}
                        className="w-full"
                        value={duration}
                        onChange={(event) => setDuration(parseInt(event.target.value, 10))}
                    />
                    <p className="text-gray-500">{duration / 1000}s</p>
                </div>
            </div>

            <div className="flex w-full items-center justify-center">
                <button
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors cursor-pointer hover:bg-blue-600"
                    onClick={() =>
                        setToast({
                            message,
                            type: messageType,
                            istop,
                            isleft,
                        })
                    }
                >
                    Show Toast
                </button>
            </div>

            {toast && (
                <div
                    className={`fixed z-50 w-auto rounded-lg flex flex-row  gap-2 px-3 py-3 text-sm font-semibold text-gray-700 shadow-lg ${toast.istop ? 'top-5' : 'bottom-5'
                        } ${toast.isleft ? 'left-5' : 'right-5'} ${toastColor[toast.type]}`}
                    role="status"
                    aria-live="polite"
                >
                    <p>
                        {toastIcon[toast.type]} {toast.message}
                    </p>
                    <button className="ml-2 text-gray-700 hover:text-gray-900 cursor-pointer font-semibold"
                        onClick={() => setToast(null)}
                        aria-label="Close"
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    )
}

export default Toast_Popup
