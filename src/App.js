import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { Button, Container } from 'reactstrap';

import Customers from './components/Customers';
import SingleCustomer from './components/SingleCustomer';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import { isAuthorized } from './auth';
import Cookies from 'js-cookie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      customerName: '',
    };
  }

  delete = (id) => {
    //filter
    // const customers = this.state.customers.filter((item) => item.id !== id);
    // this.setState({ customers });
  };

  setUser = (userInfo) => this.setState({ userInfo, isLoggedIn: true });

  logOut = () => {
    this.setState({ userInfo: {}, isLoggedIn: false });
    // todo: remvoe token
    Cookies.remove('token');
  };

  addCustomer = (customer) => {
    const { customers } = this.state;
    customer.id = customers.length + 1;
    customers.unshift(customer);
    this.setState({ customers });
    console.log(this.state.customers);
  };

  onLoginSubmit = (customerName) => {
    this.setState({ isLoggedIn: true, customerName: customerName });
    localStorage.setItem('customerName', customerName);
  };
  render() {
    const { customerName } = this.state;
    console.log('isAuthorized', isAuthorized());
    return (
      <Container fluid="xl">
        <Router>
          <ul className="menu">
            <li>
              {' '}
              <Link to="/">Home</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/about">About</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/contact">Contact</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/customers">Customers</Link>{' '}
            </li>
            {isAuthorized() && (
              <li>
                <Link to="/login" onClick={this.logOut}>
                  Logout
                </Link>
              </li>
            )}
          </ul>

          <div className="pages">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/customers">
                {isAuthorized() ? (
                  <Customers
                    addCustomer={this.addCustomer}
                    delete={this.delete}
                    customerName={customerName}
                  />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/customer/:id">
                <SingleCustomer
                  delete={this.delete}
                  customers={this.state.customers}
                />
              </Route>
              <Route path="/customer/:id/:action">
                <SingleCustomer
                  delete={this.delete}
                  customers={this.state.customers}
                />
              </Route>
              <Route exact path="/login">
                {isAuthorized() ? (
                  // redirect to diff page?
                  <div>Already logged in</div>
                ) : (
                  <Login
                    setUser={this.setUser}
                    onLoginSubmit={this.onLoginSubmit}
                  />
                )}
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
