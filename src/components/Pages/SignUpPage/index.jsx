/* eslint-disable no-undef */
import { useState } from 'react';
import Input from '../../Input';
import '../../styles.css';

const SignUpPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="h-screen w-screen">
             <div className="h-screen text-white font-semibold flex flex-col items-center justify-center pb-44">
                <h1 className="text-5xl py-5">Create your account</h1>
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
                    <button > 

                    </button>
                    {/* <Input props={"Confirmar SEnhas"} textColor={"text-neutral-950"} ></Input> */}
                </form>
            </div>
        </section> 
    );
}

export default SignUpPage;