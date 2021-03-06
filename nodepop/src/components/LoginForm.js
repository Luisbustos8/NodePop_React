import React from 'react';
import './LoginPage.css';
import FormField from './FormField';
import Button from './shared/Button';
import Checkbox from './checkbox';
import T from 'prop-types';


function LoginForm({onSubmit, isLoading}){

 const [credentials, setCredentials] = React.useState({
   email: '',
   password: '',
 });
 
 const [rememberMe, setRememberMe] = React.useState(false);

 const handleChangeLogin = event => {
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
    onSubmit(credentials, rememberMe);
  };

  const {email, password} = credentials;

  return (
      <form className="loginForm"  onSubmit={handleSubmit}>
        <FormField 
        type="text"
        name="email"
        label="Email"
        className="loginForm-field"
        value={email}
        onChange={handleChangeLogin}
        />
        <FormField 
        type="password"
        name="password"
        label="Contraseña"
        className="loginForm-field"
        value={password}
        onChange={handleChangeLogin}
        />
        <Button 
        type='submit'
      className="login-button"
      variant="primary"
      disabled = {isLoading || !email || !password } > Log In </Button>

      <Checkbox handleChange={setRememberMe} ></Checkbox>
        
      </form>
  )
  }

  LoginForm.propTypes = {
    onSubmit: T.func.isRequired, 
    isLoading: T.bool.isRequired,
  };

  

export default LoginForm;