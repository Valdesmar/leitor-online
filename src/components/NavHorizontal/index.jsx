import { Link } from "react-router-dom";

function NavHorizontal () {
    return (
    <header className="w-screen bg-white dark:bg-jackobean text-white text-sm font-semibold absolute ">

        <nav className="flex items-center justify-around p-6 lg:px-36">
            <div className="flex lg:flex-1 ">
                <Link to="/" className="text-lg">Leitor Online</Link>
            </div>

            <div className="hidden lg:flex lg:gap-x-12 justify-self-start">
                <Link to="/" className= "leading-6">Home</Link>
                <Link to="/selectfile" className="leading-6">Read</Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-end">
                <Link to="#" className=" leading-6">Log in</Link>
                <Link to="#" className="px-2 leading-6 bg-rosetaupe shadow-lg shadow-rosetaupe border-2 rounded-lg border-rosetaupe">Sign up</Link>
            </div>
        </nav>

    </header>
    );
}

export default NavHorizontal;