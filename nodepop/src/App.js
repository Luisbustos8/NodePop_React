import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import AdvertsPage from './components/AdvertsPage'


function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className='App'>
     {isLogged ? 
     <AdvertsPage isLogged={isLogged} /> 
     : 
     <LoginPage onLogin={handleLogin} />} 
    </div>
  );
}

export default App;
