import Input from '../../Input';
import '../../styles.css';

const SignUpPage = () => {
    return (
        <section className="h-screen w-screen">
             <div className="h-screen text-white font-semibold flex flex-col items-center justify-center pb-36">
                <h1>Create an account</h1>
                <form className="">
                    <Input props={"Name"}  ></Input>
                    <Input props={"Password"}  ></Input>
                    {/* <Input props={"Confirmar SEnhas"} textColor={"text-neutral-950"} ></Input> */}
                </form>
            </div>
        </section>
        
    );
}

export default SignUpPage;