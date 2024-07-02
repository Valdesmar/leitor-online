/* eslint-disable no-undef */
import { useState } from 'react';
import Input from '../../Input';
import '../../styles.css';

const SignUpPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="h-screen w-screen">
             <div className="h-screen text-white font-semibold flex flex-col items-center justify-center pb-44">
                <h1 className="text-5xl py-5">Create an account</h1>
                <form className="bg-neutral-600 opacity-70 border shadow-lg shadow-neutral-950">
                    <Input label={"Nome: "} value={username} placeholder={"Enter your name"} required={true} whenChanged={(newValue) => setUsername(newValue)}/>
                    <Input label={"Password: "} value={password} placeholder={"Enter your name"} required={true} whenChanged={(newValue) => setPassword(newValue)} />
                    {/* <Input props={"Confirmar SEnhas"} textColor={"text-neutral-950"} ></Input> */}
                </form>
            </div>
        </section> 
    );
}

export default SignUpPage;