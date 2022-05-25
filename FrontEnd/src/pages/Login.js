import Footer from '../components/Footer';
import Form from "../components/Form";
import Nav from '../components/Nav';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Login() {

    return (
        <>
            <Nav />
            <main className="main bg-dark">
            <Form />
            </main>
            <Footer />
            <ToastContainer />
        </>
       
    );
}

export default Login;