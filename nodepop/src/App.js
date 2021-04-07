import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import AdvertsPage from './components/AdvertsPage'
import NewAdvertPage from './components/shared/NewAdvertPage';
import {Switch, Route, Redirect}  from 'react-router-dom';



function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  
  const handleLogout = () => setIsLogged(false);

  return (
    <div className='App'>
      <Switch>
          <Route path="/advert" component={NewAdvertPage}/>
          <Route path="/login">
            {() => !isLogged ? <LoginPage onLogin={handleLogin} /> : <Redirect to="/"/>}
            </Route>
          <Route exact path="/">
            <AdvertsPage isLogged={isLogged} onLogout={handleLogout} /> 
          </Route> 
          <Route path="/404">
              <div
              style={{
                textAlign:'center',
                fontSize:48,
                fontWeight:'bold'
              }}
              >
                404 | Not Found Page
              </div>
          </Route>
          <Route><Redirect to="/404" /></Route>
      </Switch>
    </div>
  );
}

export default App;
