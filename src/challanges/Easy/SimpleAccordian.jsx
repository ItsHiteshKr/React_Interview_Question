import React, { useState } from "react";

import AccordionData from "./AccordionData.json";

const SimpleAccordian = () => {
  const [openIndex, setOpenIndex] = useState();

  const toggleItem = (id) => {
    setOpenIndex(openIndex == id ? null : id);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
        Simple Accordion Component
      </h1>
      <div>
        {!AccordionData || AccordionData.length === 0 ? (
          <p className="text-red-500">No data available</p>
        ) : (
          <div>
            {AccordionData.map((item, id) => {
              return (
                <div
                  key={id}
                  className="border border-gray-300 py-2 rounded-lg shadow-md sm:w-200 w-250 mb-2 hover:bg-gray-100"
                >
                  <button className=" px-10" onClick={() => toggleItem(id)}>
                    {item.title}
                  </button>

                  {openIndex === id && (
                    <div>
                      <p className="px-10">~{item.info}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleAccordian;
