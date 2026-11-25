import React, { useState, useEffect } from 'react'

const Password_Strength = () => {

    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isSymbol, setIsSymbol] = useState(false);

    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const strengthColor = {
        weak: 'bg-red-500 text-red-500',
        medium: 'bg-yellow-500 text-yellow-500',
        strong: 'bg-green-500 text-green-500'
    };

    useEffect(() => {
        const lowerCaseRegex = /[a-z]/;
        const upperCaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

        const hasLowerCase = lowerCaseRegex.test(password);
        const hasUpperCase = upperCaseRegex.test(password);
        const hasNumber = numberRegex.test(password);
        const hasSymbol = symbolRegex.test(password);

        setIsLowerCase(hasLowerCase);
        setIsUpperCase(hasUpperCase);
        setIsNumber(hasNumber);
        setIsSymbol(hasSymbol);

        // Use the current regex results instead of state values, which update asynchronously.
        if (hasLowerCase && hasUpperCase && hasNumber && hasSymbol && password.length >= 12) {
            setStrength('strong');
        } else if ((hasLowerCase || hasUpperCase) && (hasNumber || hasSymbol) && password.length >= 7) {
            setStrength('medium');
        } else {
            setStrength('weak');
        }
    }, [password]);

    return (
        <div className=" flex flex-col items-center justify-center mt-1 gap-3 mb-8">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Password Strength Component
            </h1>
            <div>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    className="min-w-80 border-2 border-gray-400 rounded-md p-2 outline-none focus:border-blue-500 "
                >
                </input>
                <div className="flex flex-row justify-between text-xs text-gray-400 mt-2 ">
                    <p className={`${isLowerCase ? "text-green-500" : ""}`}>
                        LowerCase
                    </p>
                    <p className={`${isUpperCase ? "text-green-500" : ""}`}>
                        UpperCase
                    </p>
                    <p className={`${isNumber ? "text-green-500" : ""}`}>
                        Numbers
                    </p>
                    <p className={`${isSymbol ? "text-green-500" : ""}`}>
                        Symbols
                    </p>
                </div>

                <input
                    type="range"
                    min="0"
                    max="20"
                    value={password.length}
                    readOnly
                    className={`w-full h-2.5 rounded-lg appearance-none cursor-pointer ${strengthColor[strength]}`}
                />

                <div className="w-full min-h-2.7 border border-gray-600 mt-2 rounded-md flex items-center justify-start">
                    {
                        password.length > 0 && (
                            <div className={`min-h-2 ${strength === 'weak' ? 'w-1/3' : strength === 'medium' ? 'w-2/3' : strength === 'strong' ? 'w-full' : 'w-1/10'}  rounded-md ${strengthColor[strength]}`}></div>

                        )
                    }
                </div>
                <div className="flex flex-col items-center gap-2 mt-2 text-md">
                    <p>Password has <span className="font-bold">{password.length}</span> characters</p>
                    <p>Your Password is <span className="font-bold">{strength}</span></p>
                </div>

            </div>
        </div>
    )
}

export default Password_Strength