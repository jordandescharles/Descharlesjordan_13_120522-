import Footer from '../components/Footer';
import Form from "../components/Form";
import Nav from '../components/Nav';


function SignIn() {

    return (
        <>
            <Nav />
            <main className="main bg-dark">
            <Form />
            </main>
            <Footer />
        </>
       
    );
}

export default SignIn;