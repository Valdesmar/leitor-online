import '../../styles.css';

function FilePage () {

    function handleFile (event){
        let file = event.target.files[0];
        console.log('Tipo do arquivo:', file.type);
        console.log("TO FORA!");
        if (file.type === 'text/plain') {
            console.log("TO DENTRO!");
            let reader = new FileReader();
            reader.onload = function(evt) {
                let fileContent = evt.target.result; 
                sessionStorage.setItem('file', fileContent);
                window.location.href = 'http://localhost:5173/readpage';
            }
            reader.readAsText(file);
        }
    }
    
    return (
        <main className="min-h-screen min-w-screen">
            <div className="h-screen text-white font-semibold flex items-center justify-center pb-36">
                <div className="flex flex-col items-center justify-center text-center ">
                    <div className="py-2">
                            <input onChange={ handleFile }
                                type="file" className="appearance-none text-lg text-white-500
                                rounded-full border-0
                                cursor-pointer file:cursor-pointer 
                                file:mr-4 file:py-2 file:p-4
                                file:rounded-full file:border-0
                                file:text-lg file:font-semibold
                                file:bg-dimgray file:text-white
                                hover:file:bg-dimgray
                                shadow-lg shadow-dimgray
                            " id="arquivo"/>
                    </div>

                </div>
            </div>

        </main>
    );
}

export default FilePage;