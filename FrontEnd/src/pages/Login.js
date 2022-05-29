import Footer from '../components/Footer';
import Form from "../components/Form";
import Nav from '../components/Nav';

function Login() {
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

export default Login;