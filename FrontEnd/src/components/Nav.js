import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import Logo from "../img/argentBankLogo.png";
import {useSelector, useDispatch} from 'react-redux'
import{logout,reset} from'../features/auth/authSlice'


function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{user} = useSelector((state)=> state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    
    return (

        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user ? (<button className="main-nav-item" onClick={onLogout}>
                    <i className="fa fa-user-circle"></i>
                    Sign  Out
                </button > 
               
                ) : (
                    <Link to="/login" className="main-nav-item" >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
                    
                )}
             
            </div>
        </nav>

    );
}

export default Nav;