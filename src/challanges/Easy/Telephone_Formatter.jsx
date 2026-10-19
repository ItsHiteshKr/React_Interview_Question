import React, { useState } from 'react'

const Telephone_Formatter = () => {
    const [number, setNumber] = useState('')

    const formatPhoneNumber = (phoneNumber) => {
        if (phoneNumber.length <= 3) return phoneNumber
        return `+(${phoneNumber.slice(0, 3)}) - ${phoneNumber.slice(3)}`
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Telephone Formatter Component
            </h1>
            <div className="flex flex-col items-center justify-center gap-2">
                <input
                    type='text'
                    inputMode='numeric'
                    className='px-2 py-1 border border-gray-800 hover:border-2 hover:border-blue-600 focus:outline-offset-1 focus:border-gray-600 rounded-md text-lg'
                    placeholder='Enter a phone number'
                    value={formatPhoneNumber(number)}
                    onChange={(e) => {
                        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10)
                        setNumber(digitsOnly)
                    }}
                />
                <p>+(123) - 4567890</p>
            </div>
        </div>
    )
}

export default Telephone_Formatter