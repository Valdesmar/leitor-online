
const fileInput = document.getElementById('arquivo');

function handleFile (){
    let file = fileInput.files[0];
    console.log('Tipo do arquivo:', file.type);

    if (file.type === 'text/plain') {
        let reader = new FileReader();
        reader.onload = function(evt) {
            let fileContent = evt.target.result; 
            sessionStorage.setItem('file', fileContent);
            window.location.href = 'http://127.0.0.1:5500/_reader.html';
        }
        reader.readAsText(file);
    } else {
        let myAlert = document.getElementById('myAlert');
        myAlert.removeAttribute('hidden');
    }
}

fileInput.addEventListener('change', handleFile);
