/* eslint-disable no-unused-vars */
function ReaderPage() {

    const fileContent = document.getElementById('fileContent');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');


    var fileToRead = "";
    let content = '';
    let currentPage = 1;
    let linesPerPage = 21;

    let lineToLoad = function getLine(){
        let line = '';
        
        
        return line;
    }


    function showPage(pageNumber) {
        fileContent.innerHTML = '';
        const start = (pageNumber - 1) * linesPerPage;
        const end = start + linesPerPage;
        
        for (let i = start; i < end && i < fileToRead.split('\n').length; i++) {
            // let pageContent =  
            // console.log('Length result:', fileToRead.split('\n').length);
            // console.log('')
            
            console.log(`${fileToRead.split('\n')[i]}`);
            // fileContent.innerHTML += `${fileToRead.split('\n')[i]}`;
            fileContent.innerHTML += `<p>${fileToRead.split('\n')[i]}<p>`;
        }
        
        pageInfo.textContent = `Page ${pageNumber} of ${Math.ceil(fileToRead.split('\n').length / linesPerPage)}`;
        
        nextPageBtn.removeAttribute('disabled');
    }

    function getNextPage(content) {
        if (currentPage >= Math.ceil(fileToRead.split('\n').length / linesPerPage)) {
            nextPageBtn.disabled = true;
        } else {
            currentPage++;
            showPage(currentPage);
            prevPageBtn.removeAttribute('disabled');
        }
    }

    function getPrevPage() {
        if (currentPage <= 1) {
            prevPageBtn.disabled = true;
        } else {
            currentPage--;
            showPage(currentPage);
            nextPageBtn.removeAttribute('disabled');
        }
    }

    function handleHotkeys(event) {
        if (event.shiftKey && event.key == 'D' || event.shiftKey && event.key == 'd') {
            console.log('Shift + D pressed');
            getNextPage();
        } 
        
        if (event.shiftKey && event.key == 'A' || event.shiftKey && event.key == 'a'){
            console.log('Shift + A pressed');
            getPrevPage();
        }
        
    }


    window.addEventListener('load', () => {
        fileToRead = sessionStorage.getItem('file');
        
        showPage(currentPage, fileToRead);

    });

    fileContent.addEventListener('change', () => {
        
    })

    nextPageBtn.addEventListener('click', getNextPage);
    // nextPageBtn.addEventListener('keyup', getNextPage);

    prevPageBtn.addEventListener('click', getPrevPage);


    window.addEventListener('keydown',handleHotkeys);


    return( 
        <div className="flex flex-col sm:ml-64 text-white h-screen font-mono">
           
            <div className="flex flex-row bg-jackobean divide-x divide-cadet-gray sticky top-0">
                <button className="flex-1 justify-center py-2 dark:hover:bg-slate-800" id="prevPage" disabled>Previous</button>
                <span className="flex-1 justify-center text-center py-2" id="pageInfo">Page 1 of 1</span>
                <button className="flex-1 justify-center py-2 dark:hover:bg-slate-800" id="nextPage" disabled>Next</button>
            </div>
            
            <div className="flex flex-1 justify-center bg-dimgray py-2 border-1" id="">
                <div className="
                    px-4 
                    text-2xl bg-dimgray
                    text-neutral-50
                    whitespace-pre-line font-medium 
                    tracking-normal leading-snug
                    shadow-lg shadow-taupe
                    " id="fileContent">
                </div>
            </div>

        </div>
    );
}

export default ReaderPage;