import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { getToken } from '../features/auth/userSlice';
import NameUpdater from '../components/NameUpdater';


function User() {
    const token = getToken()

    if (token === null) {
        return (
            <>
                <Nav />
                <main className="main bg-dark">
                    <h1 className='error-h1'>ERROR you must be logged</h1>
                </main>
                <Footer />
            </>
        )
    }
    return (
        <>
            <Nav />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back
                    </h1>
                    <NameUpdater />
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button" >View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default User;