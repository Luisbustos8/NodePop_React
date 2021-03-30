import React from 'react';
import './LoginPage.css';
import FormField from './FormField';
import Button from './shared/Button';


function RegisterForm({onSubmit}){

 const [credentials, setCredentials] = React.useState({
   mail: '',
   password: '',
   username:'',
   name: '',
 });

 const handleChangeRegister = event => {
   setCredentials(oldCredentials => {
     const newCredentials = {
      ...oldCredentials,
     [event.target.name]: event.target.value,
     };
     return newCredentials
   });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const {mail, password, username, name} = credentials;

  return (
      <form className="loginForm"  onSubmit={handleSubmit}>
        <FormField 
        type="text"
        name="mail"
        label="Email"
        className="loginForm-field"
        value={mail}
        onChange={handleChangeRegister}
        />
        <FormField 
        type="password"
        name="password"
        label="Contraseña"
        className="loginForm-field"
        value={password}
        onChange={handleChangeRegister}
        />
        <FormField
        type="text"
        name="username"
        label="Nombre de usuario"
        className="loginForm-field"
        value={username}
        onChange={handleChangeRegister}
        />
        <FormField
        type="text"
        name="name"
        label="Nombre y apellidos"
        className="loginForm-field"
        value={name}
        onChange={handleChangeRegister}
        />
        <Button 
        type='submit'
      className="register-button"
      variant="primary"
      disabled={!mail || !password || !username || !name}>¡Regístrate!</Button>
        
      </form>
  )
  }

export default RegisterForm;