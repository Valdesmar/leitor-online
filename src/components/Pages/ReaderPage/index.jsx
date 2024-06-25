/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import './styles.css';
import NavVertical from "../../NavVertical";

function ReaderPage() {
	const [MyColor, setMyColor] = useState({
		outerColorBG: "bg-jackobean", 
		innerColorBG: "bg-rosetaupe", 
		outerTextColor: "text-white",
		innerTextColor: "text-white",
	});
	
	const changeMyColor = (newMyColor) => {
		setMyColor((prevState) => ({
			...prevState,
			...newMyColor,
		}));
	};

	const fileContentRef = useRef(null);
	const prevPageBtnRef = useRef(null);
	const nextPageBtnRef = useRef(null);
	const pageInfoRef = useRef(null);

	var fileToRead = " ";
	let currentPage = 1;
	const linesPerPage = 21;

	function showPage(pageNumber) {
		if (fileContentRef.current) {
			fileContentRef.current.innerHTML = "";
			const start = (pageNumber - 1) * linesPerPage;
			const end = start + linesPerPage;
			const lines = fileToRead.split("\n");

			for (let i = start; i < end && i < lines.length; i++) {
				fileContentRef.current.innerHTML += `<p>${lines[i]}</p>`;
			}

			if (pageInfoRef.current) {
				pageInfoRef.current.textContent = `Page ${pageNumber} of ${Math.ceil(
				lines.length / linesPerPage
				)}`;
			}

			if (nextPageBtnRef.current) {
				nextPageBtnRef.current.removeAttribute("disabled");
			}
		}
	}

	function getNextPage() {
		if (currentPage >= Math.ceil(fileToRead.split("\n").length / linesPerPage)) {
			if (nextPageBtnRef.current) {
				nextPageBtnRef.current.disabled = true;
			}
		} else {
			currentPage++;
			showPage(currentPage);
			if (prevPageBtnRef.current) {
				prevPageBtnRef.current.removeAttribute("disabled");
			}
		}
	}

	function getPrevPage() {
		if (currentPage <= 1) {
			if (prevPageBtnRef.current) {
				prevPageBtnRef.current.disabled = true;
			}
		} else {
			currentPage--;
			showPage(currentPage);
			if (nextPageBtnRef.current) {
				nextPageBtnRef.current.removeAttribute("disabled");
			}
		}
	}

	function handleHotkeys(event) {
		if ((event.shiftKey && event.key === "D") || (event.shiftKey && event.key === "d")) {
			console.log("Shift + D pressed");
			getNextPage();
		}

		if ((event.shiftKey && event.key === "A") || (event.shiftKey && event.key === "a")) {
			console.log("Shift + A pressed");
			getPrevPage();
		}
	}

	useEffect(() => {
		fileToRead = sessionStorage.getItem("file");
		showPage(currentPage);

		window.addEventListener("keydown", handleHotkeys);

		if (nextPageBtnRef.current) {
			nextPageBtnRef.current.addEventListener("click", getNextPage);
		}
	
		if (prevPageBtnRef.current) {
				prevPageBtnRef.current.addEventListener("click", getPrevPage);
		}
	
		return () => {
			if (nextPageBtnRef.current) {
				nextPageBtnRef.current.removeEventListener("click", getNextPage);
			}
		
			if (prevPageBtnRef.current) {
				prevPageBtnRef.current.removeEventListener("click", getPrevPage);
			}
			window.removeEventListener("keydown", handleHotkeys);
		};
	}, []);


	return (
		<div className="flex flex-row size-full min-h-screen">
			<NavVertical MyColor={MyColor} changeMyColor={changeMyColor} className="text-red"></NavVertical>
			<div className={`flex flex-col ${MyColor.innerTextColor} w-full font-medium `}>
				<div className={`flex flex-row ${MyColor.outerColorBG} ${MyColor.outerTextColor} divide-x divide-cadet-gray sticky top-0`}>
					<button className="flex-1 justify-center py-2 dark:hover:bg-chamoisee" ref={prevPageBtnRef} disabled>
					Previous
					</button>
					<span className="flex-1 justify-center text-center py-2" ref={pageInfoRef}>
					Page 1 of 1
					</span>
					<button className="flex-1 justify-center py-2 dark:hover:bg-chamoisee" ref={nextPageBtnRef} disabled>
					Next
					</button>
				</div>

				<div className={`flex flex-row justify-center py-2 ${MyColor.innerColorBG} ${MyColor.innerTextColor} border-1 h-full`}>
					<div
					className={`px-4 text-2xl
					whitespace-pre-line font-light
					tracking-normal
					shadow-lg shadow-taupe
					max-w-4xl
					text-wrap
					`}
					ref={fileContentRef}
					></div>
				</div>
			</div>
		</div>
	);
}

export default ReaderPage;