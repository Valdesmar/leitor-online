import '../../styles.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="min-h-screen min-w-screen">
            <div className="h-screen text-white font-semibold flex items-center justify-center pb-36">
                <div className="flex flex-col items-center justify-center text-center">

                    <h1 className="xl:text-8xl lg:text-4xl text-3xl tracking-widest py-2">
                        Welcome to Leitor Online 
                    </h1>
                    <h2 className="xl:text-4xl lg:text-2xl text-xl text-white opacity-60 pb-8">        
                        A website developed to improve the reading experience on your own computer.
                    </h2>
                    <div className="py-2">
                        <Link to="/selectfile" className="px-6 py-2 bg-rosetaupe shadow-lg shadow-rosetaupe border-2 rounded-lg border-rosetaupe">
                            <span className="text-xl font-semibold leading-6 text-white">Start now</span>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Home;