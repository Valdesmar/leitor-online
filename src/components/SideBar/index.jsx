// import React, { useState } from 'react';

// const Sidebar = () => {
//     const [isCollapsed, setIsCollapsed] = useState(false);

//     const toggleSidebar = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     return (
//         <aside
//             id="logo-sidebar"
//             className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isCollapsed ? '-translate-x-full' : 'translate-x-0'} sm:translate-x-0`}
//             aria-label="Sidebar"
//         >
//             <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-jackobean">
//                 <button onClick={toggleSidebar} className="sm:hidden p-2 text-gray-900 dark:text-white">
//                     {isCollapsed ? 'Open Sidebar' : 'Close Sidebar'}
//                 </button>
//                 <a href="/index.html" className="flex items-center ps-2.5 mb-5">
//                     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Leitor Online</span>
//                 </a>
//                 <ul className="space-y-2 font-medium">
//                     <li>
//                         <a
//                             href="/index.html"
//                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                         >
//                             <span className="ms-3">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/fileSelection.html"
//                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                         >
//                             <span className="flex-1 ms-3 whitespace-nowrap">Read</span>
//                         </a>
//                     </li>
//                     <li>
//                         <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
//                             <span className="flex-1 ms-3 whitespace-nowrap">Hotkeys:</span>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
//                             <span className="flex-1 ms-3 whitespace-nowrap">Shift+D=Next Page</span>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
//                             <span className="flex-1 ms-3 whitespace-nowrap">Shift+A=Previous Page</span>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;