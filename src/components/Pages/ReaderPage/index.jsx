/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import './styles.css';

function ReaderPage() {
  const fileContentRef = useRef(null);
  const prevPageBtnRef = useRef(null);
  const nextPageBtnRef = useRef(null);
  const pageInfoRef = useRef(null);

  // var fileToRead = " ";
  // let currentPage = 1;
  // const linesPerPage = 21;

  // function showPage(pageNumber) {
  //   if (fileContentRef.current) {
  //     fileContentRef.current.innerHTML = "";
  //     const start = (pageNumber - 1) * linesPerPage;
  //     const end = start + linesPerPage;
  //     const lines = fileToRead.split("\n");

  //     for (let i = start; i < end && i < lines.length; i++) {
  //       fileContentRef.current.innerHTML += `<p>${lines[i]}</p>`;
  //     }

  //     if (pageInfoRef.current) {
  //       pageInfoRef.current.textContent = `Page ${pageNumber} of ${Math.ceil(
  //         lines.length / linesPerPage
  //       )}`;
  //     }

  //     if (nextPageBtnRef.current) {
  //       nextPageBtnRef.current.removeAttribute("disabled");
  //     }
  //   }
  // }

  // function getNextPage() {
  //   if (currentPage >= Math.ceil(fileToRead.split("\n").length / linesPerPage)) {
  //     if (nextPageBtnRef.current) {
  //       nextPageBtnRef.current.disabled = true;
  //     }
  //   } else {
  //     currentPage++;
  //     showPage(currentPage);
  //     if (prevPageBtnRef.current) {
  //       prevPageBtnRef.current.removeAttribute("disabled");
  //     }
  //   }
  // }

  // function getPrevPage() {
  //   if (currentPage <= 1) {
  //     if (prevPageBtnRef.current) {
  //       prevPageBtnRef.current.disabled = true;
  //     }
  //   } else {
  //     currentPage--;
  //     showPage(currentPage);
  //     if (nextPageBtnRef.current) {
  //       nextPageBtnRef.current.removeAttribute("disabled");
  //     }
  //   }
  // }

  // function handleHotkeys(event) {
  //   if ((event.shiftKey && event.key === "D") || (event.shiftKey && event.key === "d")) {
  //     console.log("Shift + D pressed");
  //     getNextPage();
  //   }

  //   if ((event.shiftKey && event.key === "A") || (event.shiftKey && event.key === "a")) {
  //     console.log("Shift + A pressed");
  //     getPrevPage();
  //   }
  // }

  // useEffect(() => {
  //   fileToRead = sessionStorage.getItem("file");
  //   console.log(fileToRead);
  //   showPage(currentPage);

  //   window.addEventListener("keydown", handleHotkeys);

  //   if (nextPageBtnRef.current) {
  //     nextPageBtnRef.current.addEventListener("click", getNextPage);
  //   }
  
  //   if (prevPageBtnRef.current) {
  //     prevPageBtnRef.current.addEventListener("click", getPrevPage);
  //   }
  
  //   return () => {
  //     if (nextPageBtnRef.current) {
  //       nextPageBtnRef.current.removeEventListener("click", getNextPage);
  //     }
  
  //     if (prevPageBtnRef.current) {
  //       prevPageBtnRef.current.removeEventListener("click", getPrevPage);
  //     }
  //     window.removeEventListener("keydown", handleHotkeys);
  //   };
  // }, []);

  // useEffect(() => {
  // }, []);



  return (
    <div className="flex flex-col text-white h-screen">
      <div className="flex flex-row bg-jackobean divide-x divide-cadet-gray sticky top-0">
        <button className="flex-1 justify-center py-2 dark:hover:bg-slate-800" ref={prevPageBtnRef} disabled>
          Previous
        </button>
        <span className="flex-1 justify-center text-center py-2" ref={pageInfoRef}>
          Page 1 of 1
        </span>
        <button className="flex-1 justify-center py-2 dark:hover:bg-slate-800" ref={nextPageBtnRef} disabled>
          Next
        </button>
      </div>

      <div className="flex flex-1 justify-center bg-rosetaupe py-2 border-1">
        <div
          className="px-4 text-2xl 
          bg-rosetaupe text-neutral-50 
          whitespace-pre-line font-medium 
          tracking-normal
          shadow-lg shadow-taupe
          max-w-4xl
          "
     
          ref={fileContentRef}
        ></div>
      </div>
    </div>
  );
}

export default ReaderPage;