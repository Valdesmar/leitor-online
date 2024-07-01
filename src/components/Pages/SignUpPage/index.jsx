import Input from '../../Input';
import '../../styles.css';

const SignUpPage = () => {
    return (
        <section className='h-screen w-screen'>
             <div className="h-screen text-white font-semibold flex items-center justify-center pb-36">
                <h1>Create an account</h1>
                <form>
                    <Input ></Input>
                </form>
            </div>
        </section>
        
    );
}

export default SignUpPage;