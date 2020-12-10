import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { removeToken, setToken } from './auth';
// import Cookies from 'js-cookie';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Layout from './components/Layout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
    };
  }

  logOut = () => {
    // in production
    // Cookies.remove('token');
    // in development
    this.setState({ customerName: '' });
    removeToken();
  };

  onLoginSubmit = (customer, token) => {
    // only in development
    setToken(customer, token);
    // simply rerender
    this.setState({ userInfo: customer });
  };

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Navbar logOut={this.logOut} />
          <Layout>
            <Routes onLoginSubmit={this.onLoginSubmit} />
          </Layout>
        </Router>
      </Suspense>
    );
  }
}

export default App;
