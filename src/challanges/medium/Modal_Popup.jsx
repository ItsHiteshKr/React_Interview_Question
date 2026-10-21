import React, { useState, useEffect } from 'react'

const Modal_Popup = () => {

    const [iscloseOnOutsideClick, setIsCloseOnOutsideClick] = useState(true);
    const [iscloseOnEscape, setIsCloseOnEscape] = useState(true);
    const [isShowCloseIcon, setIsShowCloseIcon] = useState(true);
    const [isShowBackdrop, setIsShowBackdrop] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const handleEscapeKey = (event) => {
        if (iscloseOnEscape && event.key === 'Escape') {
            setModalOpen(false);
        }
    };

    useEffect(() => {
        // Escape is a keyboard event, so it must use a keydown listener.
        if (modalOpen && iscloseOnEscape) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        // Remove the listener when the modal closes or the setting changes.
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [modalOpen, iscloseOnEscape, iscloseOnOutsideClick]);

    const handleOutsideClick = (event) => {
        // Only the backdrop itself closes the modal; clicks inside the content do not.
        if (iscloseOnOutsideClick && event.target === event.currentTarget) {
            setModalOpen(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center mt-1 gap-3 mb-8">
            <h1 className="text-3xl font-bold border-b-2 border-gray-600 pb-1">
                Modal Popup Component
            </h1>
            <div className=" px-4 space-y-2">
                <div className="flex items-center justify-center gap-3">
                    <p>
                        Close dialog on outside click
                    </p>
                    <input type="checkbox"
                        checked={iscloseOnOutsideClick}
                        onChange={() => setIsCloseOnOutsideClick(!iscloseOnOutsideClick)}
                    />
                </div>
                <div className="flex items-center justify-center gap-3">
                    <p>Close dialog on escape</p>
                    <input type="checkbox"
                        checked={iscloseOnEscape}
                        onChange={() => setIsCloseOnEscape(!iscloseOnEscape)}
                    />
                </div>
                <div className="flex items-center justify-center gap-3">
                    <p>Show close icon</p>
                    <input type="checkbox"
                        checked={isShowCloseIcon}
                        onChange={() => setIsShowCloseIcon(!isShowCloseIcon)}
                    />
                </div>
                <div className="flex items-center justify-center gap-3">
                    <p>Show backdrop</p>
                    <input type="checkbox"
                        checked={isShowBackdrop}
                        onChange={() => setIsShowBackdrop(!isShowBackdrop)}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center w-auto h-20 gap-3">
                <button
                    className="bg-gray-200 hover:bg-gray-300 border border-gray-800 text-gray-600 py-2 px-4 rounded cursor-pointer"
                    onClick={() => { setModalOpen(true) }}>
                    Open Modal
                </button>
            </div>


            {
                modalOpen && (
                    <div
                        className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-4 ${isShowBackdrop ? 'bg-black/50' : 'bg-transparent'}`}
                        onClick={handleOutsideClick}
                    >
                        <div className="flex w-full max-w-lg flex-col items-center justify-center gap-5 rounded-lg border border-gray-900 bg-white px-4 shadow-lg">
                            <div className=" flex items-center justify-between px-4 py-2  w-full">
                                <h1 className='font-bold text-2xl'>Modal Heading</h1>
                                {
                                    isShowCloseIcon && (
                                        <button className=" hover:bg-gray-300 border border-gray-300 text-gray-600 py-1 px-3 rounded cursor-pointer"
                                            onClick={() => { setModalOpen(false) }}>
                                            X
                                        </button>
                                    )
                                }

                            </div>
                            <div className="text-wrap px-4 py-2 w-full font-semibold">
                                <p>This is modal content. You can put any content here. This has agroovy backdrop!
                                    You can also close this modal by clicking outside of it or pressing the escape key
                                </p>
                            </div>
                            <div className="flex items-center justify-end gap-3 px-3 py-2 w-full">
                                <button className="bg-gray-200 hover:bg-gray-300 border border-gray-800 text-gray-800 py-1 px-2  rounded flex items-end justify-end cursor-pointer"
                                    onClick={() => { setModalOpen(false) }}>
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal_Popup