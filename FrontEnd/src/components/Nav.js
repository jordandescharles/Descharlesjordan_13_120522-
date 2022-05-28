import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { getToken } from '../features/auth/userSlice';


function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { firstName } = useSelector((state) => state.user)

    const token = getToken()

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
                {token ? (
                    <>
                        <span className="main-nav-item" >
                            <i className="fa fa-user-circle"></i>
                            <strong>{firstName}</strong>
                        </span >

                        <span className="main-nav-item" onClick={onLogout}>
                            <i class="fa fa-sign-out"></i>
                            <strong>Sign Out</strong>
                        </span >
                    </>
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