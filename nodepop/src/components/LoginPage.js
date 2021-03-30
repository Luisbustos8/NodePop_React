import React from 'react';
import LoginForm from './LoginForm';
import Layout from './layout/Layout';
import {login} from '../api/auth';

import './LoginPage.css';

function LoginPage({onLogin}) {

    const handleSubmit = async credentials => {
        await login(credentials);
        onLogin();
        //login(credentials).then(() => onLogin());
    };

    return (
        <Layout >
        <div className="LoginPage">
            <h1 className="LoginPage-title">BIENVENIDO A NODEPOP</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
        </Layout>
    );
}

export default LoginPage;