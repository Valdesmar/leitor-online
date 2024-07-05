/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";

function NavVertical({ MyColor, changeMyColor}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  
    const openFirstModal = () => {
      setIsFirstModalOpen(true);
    };
  
    const closeFirstModal = () => {
      setIsFirstModalOpen(false);
    };
  
    const openSecondModal = () => {
      setIsSecondModalOpen(true);
    };
  
    const closeSecondModal = () => {
      setIsSecondModalOpen(false);
    };


    return (
        <>
            {
                isOpen ? 
                    <div className={`
                        flex flex-row justify-content
                        transition-transform transform 
                        ${ isOpen ? "translate-x-0 " : "-translate-x-3/4" }
                        `}>
                        <div className={`h-full px-4 py-4 ${MyColor.outerColorBG} dark:${MyColor.outerColorBG}`}>
                                {/* transition-transform transform ${ isOpen ? "translate-x-0 " : "-translate-x-full" }  */}
                                <Link to="/" className="flex items-center ps-2.5 mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 m-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Leitor Online</span>
                                </Link>
                                <div className="sticky top-0 flex flex-col">
                                    <ul className="py-2 justify-end">
                                        <li>
                                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-chamoisee group">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                </svg>
                                                <span className="flex ms-3">Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/selectfile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-chamoisee group">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                                </svg>

                                                <span className="flex ms-3">Read</span>
                                            </Link>
                                        </li>
                                    {/* </ul> */}
                                    {/* <ul className=""> */}
                                        <li>
                                            <div onClick={openFirstModal} 
                                                className="p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-chamoisee group"
                                                role="button">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                    </svg> */}
                                                    <span className="flex-1 ms-3">Hotkeys</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div onClick={openSecondModal} 
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-chamoisee group"
                                                role="button"
                                                >
                                                    <span className="flex-1 ms-3 whitespace-nowrap">Themes</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                    {/* <div className="flex-grow py-80"></div> */}
                                <Modal isOpen={isFirstModalOpen} onClose={closeFirstModal} BgColor={MyColor.outerColorBG}>
                                    <h2 className="text-xl font-medium mb-4 flex">Hotkeys</h2>
                                    {/* <p className="mb-4">Choose the theme you want to use</p> */}
                                    <ul>
                                        <li>
                                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                                                <span className="flex-1 ms-3 whitespace-nowrap">Shift+D=Next Page</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                                                <span className="flex-1 ms-3 whitespace-nowrap">Shift+A=Previous Page</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={closeFirstModal}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                                    >
                                    Close
                                    </button>
                                </Modal>
                                <Modal isOpen={isSecondModalOpen} onClose={closeSecondModal} BgColor={MyColor.outerColorBG}>
                                    <h2 className="text-xl font-medium mb-4">Themes</h2>
                                    {/* <p className="mb-4">Choose the theme you want to use</p> */}
                                    <ul>
                                        <li>
                                            <button onClick={() => changeMyColor({
                                                outerColorBG: "bg-jackobean", 
                                                innerColorBG: "bg-black-olive", 
                                                outerTextColor: "text-white", 
                                                innerTextColor: "text-white"
                                                })} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                                                <span className="flex-1 ms-3 whitespace-nowrap">Vintage</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => changeMyColor({
                                                outerColorBG: "bg-slate-900", 
                                                innerColorBG: "bg-slate-200", 
                                                outerTextColor: "text-white", 
                                                innerTextColor: "text-slate-900"
                                                })} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                                                <span className="flex-1 ms-3 whitespace-nowrap">Black</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => changeMyColor({
                                                outerColorBG: "bg-yankees-blue", 
                                                innerColorBG: "bg-independence", 
                                                outerTextColor: "text-white", 
                                                innerTextColor: "text-white"
                                                })} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                                                <span className="flex-1 ms-3 whitespace-nowrap">Blue</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => changeMyColor({
                                                outerColorBG: "bg-test1", 
                                                innerColorBG: "bg-test2", 
                                                outerTextColor: "text-white", 
                                                innerTextColor: "text-white"
                                                })} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                                                <span className="flex-1 ms-3 whitespace-nowrap">Test</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={closeSecondModal}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                                    >
                                    Close
                                    </button>
                                </Modal>
                            </div>
                            <button onClick={toggleSidebar} className={`  ${MyColor.outerColorBG}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white"
                                    className="size-10 place-items-end">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                    </div>
                : 
                // Closed
                <button onClick={toggleSidebar} className={`  ${MyColor.outerColorBG}`}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" 
                    className="size-10 place-items-end">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            } 

        </>
    );
}

export default NavVertical;