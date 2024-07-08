/* eslint-disable no-undef */
import { useState } from 'react';
import Input from '../../Input';
import '../../styles.css';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="h-screen flex flex-col items-center justify-center text-white font-semibold ">
                <h1 className="text-5xl py-5">Login</h1>
                <form className="bg-neutral-900 bg-opacity-70 shadow-2xl shadow-neutral-950 rounded-lg">
                    <Input label={"Name "} value={username} placeholder={"Enter an username"} required={true} whenChanged={(newValue) => setUsername(newValue)}/>
                    <Input 
                        label="Password " 
                        placeholder="Enter your password" 
                        value={password} 
                        type={"password"} 
                        _required={true} 
                        whenChanged={(newValue) => setPassword(newValue)}
                    />
                    <button className="mx-20 mb-4 px-6 leading-6 bg-rosetaupe shadow-lg shadow-rosetaupe border-2 rounded-lg border-rosetaupe"> 
                        Login
                    </button>
                    {/* <Input props={"Confirmar SEnhas"} textColor={"text-neutral-950"} ></Input> */}
                </form>
        </section> 
    );
}

export default LoginPage;