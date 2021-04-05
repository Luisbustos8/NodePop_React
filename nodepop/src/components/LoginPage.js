import React from 'react';
import LoginForm from './LoginForm';
import Layout from './layout/Layout';
import {login} from '../api/auth';

import './LoginPage.css';

function LoginPage({onLogin}) {
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const resetError = () => setError(null);

    const handleSubmit = async credentials => {
        try {
            setIsLoading(true);
            setError(null);
            await login(credentials);
            onLogin(); 
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout >
        <div className="LoginPage">
            <h1 className="LoginPage-title">BIENVENIDO A NODEPOP</h1>
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
            {error && <div onClick={resetError} className="loginPage-error">{error.message} </div>}
        </div>
        </Layout>
    );
}

export default LoginPage;