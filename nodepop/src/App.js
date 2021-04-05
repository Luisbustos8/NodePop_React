import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import AdvertsPage from './components/AdvertsPage'
import NewAdvertPage from './components/shared/NewAdvertPage';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);
  
  const handleLogout = () => setIsLogged(false);

  return (
    /*
    <div className='App'>
     {isLogged ? 
     <AdvertsPage isLogged={isLogged} onLogout={handleLogout}/> 
     : 
     <LoginPage onLogin={handleLogin} />} 
    </div>
    */
   <NewAdvertPage />
  );
}

export default App;
