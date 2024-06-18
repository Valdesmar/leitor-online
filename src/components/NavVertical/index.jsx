/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

function NavVertical() {
    const [isOpen, setIsOpen] = useState(true);
    const [BgColor, setBgColor] = useState('bg-jackobean');
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const changeBgColor = async (newBgColor) => {
        console.log(`The new BgColor is: ${BgColor}`);
        setBgColor(newBgColor);
    };

    return (
        <div className={`flex flex-row
            transition-transform transform 
            ${ isOpen ? "translate-x-0 " : "-translate-x-3/4" }
            `} >
            <div className={`flex-1 w-3/4 px-3 py-4 overflow-y-auto ${BgColor} dark:${BgColor} justify-center 
            `} >
                {/*  transition-transform transform 
                 ${ isOpen ? "translate-x-0 " : "-translate-x-full" } */}
                <Link to="/" className="flex items-center ps-2.5 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 m-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Leitor Online</span>
                </Link>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/selectfile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="flex-1 ms-3 whitespace-nowrap">Read</span>
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <span className="flex-1 ms-3 whitespace-nowrap">Hotkeys:</span>
                        </div>
                    </li>
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
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <span className="flex-1 ms-3 whitespace-nowrap">BgColor Schemes:</span>
                        </div>
                    </li>                     
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <button onClick={() => changeBgColor('bg-jackobean')} className="flex-1 ms-3 whitespace-nowrap">-Brownish</button>
                        </div>
                    </li>                     
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <button onClick={() => changeBgColor('bg-neutral-950')} className="flex-1 ms-3 whitespace-nowrap">-Dev</button>
                        </div>
                    </li>                     
                </ul>

            </div>
            <button onClick={toggleSidebar} className={`w-1/4  ${BgColor}`}>
                {
                    isOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="size-10 place-items-end">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className="size-10 place-items-end">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                } 
            </button>

        </div>
    
    );
}

export default NavVertical;
