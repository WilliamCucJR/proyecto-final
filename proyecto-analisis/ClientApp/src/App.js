import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import './custom.css';

export default class App extends Component {
  
  static displayName = App.name;

  render() {

    let User = '';
    let Password = '';

    const userSession = JSON.parse(localStorage.getItem('userSession'));

    console.log(userSession);

    if(userSession != null){
      User = userSession['Username'];
      Password = userSession['Password'];
    }

    if(User === '' || Password === ''){

      return (
        <div>
          <Login />
        </div>
      );
  
    }else{

      return (
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      );

    }
    
    
  }
}
