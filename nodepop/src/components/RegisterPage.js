import React from 'react';
import RegisterForm from './RegisterForm';
import Layout from './layout/Layout';
import {register} from '../api/auth';

import './LoginPage.css';

function RegisterPage() {

    console.log(register)

    return (
        <Layout>
        <div className="LoginPage">
            <h1 className="LoginPage-title">BIENVENIDO A NODEPOP</h1>
            <RegisterForm onSubmit={register} />
        </div>
        </Layout>
    );
}

export default RegisterPage;