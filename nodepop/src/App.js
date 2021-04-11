import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage'
import AdvertsPage from './components/AdvertsPage'
import NewAdvertPage from './components/shared/NewAdvertPage';
import AdvertDetailPage from './components/AdvertDetailPage'
import {Switch, Route, Redirect}  from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'



function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  
  const handleLogout = () => setIsLogged(false);


   return (
    <div className='App'>
      <Switch>
          <PrivateRoute isLogged={isLogged} path="/advert/:advertId">
            {({history}) =>
            <AdvertDetailPage  isLogged={isLogged} onLogout={handleLogout} history={history}  />
          }
          </PrivateRoute>
          <PrivateRoute isLogged={isLogged} path="/advert">
            <NewAdvertPage isLogged={isLogged} onLogout={handleLogout} />
          </PrivateRoute>
          <Route path="/login">
            {() => !isLogged ? <LoginPage onLogin={handleLogin} /> : <Redirect to="/"/>}
            </Route>
          <PrivateRoute isLogged={isLogged} exact path="/">
            {({history}) => 
            <AdvertsPage isLogged={isLogged} onLogout={handleLogout} history={history} /> 
            }
          </PrivateRoute> 
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
