import React, { useState } from 'react'

const String_Transformers = () => {

    const [inputString, setInputString] = useState('Hello World')
    const [transformedText, setTransformedText] = useState(inputString)

    const toLower = () => {
        setTransformedText(inputString.toLowerCase())
    }

    const toUpper = () => {
        setTransformedText(inputString.toUpperCase())
    }

    const toCamelCase = () => {
        const words = inputString.trim().split(' ');

        const camelword = words.map((word, index) => {
            if (index == 0) {
                return word.toLowerCase();
            }
            else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
        }).join('');

        setTransformedText(camelword)

    }

    const toPascalCase = () => {
        const words = inputString.trim().split(' ');

        const Pascalword = words.map((word, index) => {

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

        }).join('');

        setTransformedText(Pascalword)
    }

    const toSnakeCase = () => {
        const snakeCase = inputString.replace(/\s+/g, '_').toLowerCase();
        setTransformedText(snakeCase);
    }

    const toKebabCase = () => {
        const kebabcase = inputString.replace(/\s+/g, '-').toLowerCase();
        setTransformedText(kebabcase);
    }
    const toTrim = () => {
        setTransformedText(inputString.trim())
    }


    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                String Transformers Component
            </h1>
            <div className="flex flex-col items-center justify-center gap-2">
                <textarea
                    className='px-2 py-1 border border-gray-600 focus:outline-offset-1 focus:border-gray-600 rounded-md text-sm h-32 md:w-110 w-120'
                    placeholder='Enter some text here...'
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                >
                    Enter some text here...
                </textarea>
                <div className='grid sm:grid-cols-3 mt-3 gap-3'>
                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toLower}>
                        Lower Case
                    </button>

                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toUpper}>
                        Upper Case
                    </button>

                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toCamelCase}
                    >Camel Case
                    </button>

                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toPascalCase}
                    >
                        Pascal Case
                    </button>

                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toSnakeCase}
                    >
                        Snake Case
                    </button>

                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toKebabCase}
                    >
                        Kebab Case
                    </button>

                    <button className='bg-slate-100 text-black px-6 py-1 rounded-sm hover:bg-gray-200 border dark:border-gray-600 cursor-pointer'
                        onClick={toTrim}
                    >
                        Trim
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-lg font-semibold'>
                        Transformed String.
                    </p>
                    <p>
                        {transformedText}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default String_Transformers