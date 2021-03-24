import React from 'react';
import './LoginPage.css';
import LoginButton from './LoginButton';
import Layout from './layout/Layout';
import FormField from './FormField';
import Button from './shared/Button';

function LoginForm(){

 const [credentials, setCredentials] = React.useState({
   mail: '',
   password: '',
   username:'',
   name: '',
 });

 const handleChangeRegister = event => {
   const newCredentials = {...credentials, [event.target.name]: event.target.value}
   setCredentials(newCredentials);
 }

  return (
    <Layout title="NODEPOP">
      <form className="loginForm">
        <FormField 
        type="text"
        name="mail"
        label="Email"
        className="loginForm-field"
        value={credentials.mail}
        onChange={handleChangeRegister}
        />
        <FormField 
        type="password"
        name="password"
        label="Contraseña"
        className="loginForm-field"
        value={credentials.password}
        onChange={handleChangeRegister}
        />
        <FormField
        type="text"
        name="username"
        label="Nombre de usuario"
        className="loginForm-field"
        value={credentials.username}
        onChange={handleChangeRegister}
        />
        <FormField
        type="text"
        name="name"
        label="Nombre y apellidos"
        className="loginForm-field"
        value={credentials.name}
        onChange={handleChangeRegister}
        />
        
      </form>
      <Button className="register-button">¡Regístrate!</Button>
    
   </Layout>
  )
  }

export default LoginForm;