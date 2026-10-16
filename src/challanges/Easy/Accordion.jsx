import React, { useState } from 'react'

import AccordionData from './AccordionData.json'


const Accordion = () => {

    const [openItems, setOpenItems] = useState([]);
    const [multipleOpen, setMultipleOpen] = useState(false);

    const toggleItem = (index) => {
        if(multipleOpen){
            setOpenItems((prevItems) =>
                prevItems.includes(index)
                    ? prevItems.filter((itemIndex) => itemIndex !== index)
                    : [...prevItems, index]
            );
            return;
        }
        
        setOpenItems((prevItems) => (
            prevItems.includes(index) ? [] : [index]
        ));
    };

    const handleMultipleOpenToggle = (checked) => {
        setMultipleOpen(checked);

        if (!checked) {
            setOpenItems([]);
        }

    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">Accordion Component</h1>
            <div className="flex items-center justify-center mt-4">
                <h2 className="text-lg font-semibold">Is multiple open accordion allowed?</h2>
                <input
                    type="checkbox"
                    className="ml-2"
                    checked={multipleOpen}
                    onChange={(e) => handleMultipleOpenToggle(e.target.checked)}
                />
            </div>
            <div>
                {AccordionData?.map((item, id) => {
                    const isOpen = multipleOpen ? openItems.includes(id) : openItems[0] === id;

                    return (
                        <div key={id} className="border border-gray-300 py-2 rounded-lg shadow-md px-10 w-250 mb-2">
                            <div className="flex items-center justify-between cursor-pointer px-1 gap-3 mb-5">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <button
                                    className="text-gray-700 px-3 py-1 rounded-full bg-gray-200 cursor-pointer"
                                    onClick={() => toggleItem(id)}
                                >
                                    {isOpen ? '-' : '+'}
                                </button>
                            </div>
                            <div className="p-1 mb-4">
                                {isOpen ? <p>{item.info}</p> : null}
                            </div>
                        </div>
                    );
                })}
            </div>


        </div>
    )
}

export default Accordion