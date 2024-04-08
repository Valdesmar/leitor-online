
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
    if (event.shiftKey && event.key == 'D') {
        console.log('Shift + D pressed');
        getNextPage();
    } 
    
    if (event.shiftKey && event.key == 'A'){
        console.log('Shift + A pressed');
        getPrevPage();
    }
    
}


window.addEventListener('load', () => {
    fileToRead = sessionStorage.getItem('file');
    
    showPage(currentPage, fileToRead);

});

nextPageBtn.addEventListener('click', getNextPage);
// nextPageBtn.addEventListener('keyup', getNextPage);

prevPageBtn.addEventListener('click', getPrevPage);

window.addEventListener('keydown',handleHotkeys);

