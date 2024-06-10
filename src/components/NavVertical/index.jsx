import { Link } from "react-router-dom";

function NavVertical() {
    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-jackobean">
            <Link to="/" className="flex items-center ps-2.5 mb-5">
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

                    
            </ul>
        </div>
    </aside>
    );
}

export default NavVertical;