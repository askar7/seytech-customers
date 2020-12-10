import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SingleCustomer from './components/SingleCustomer';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
// import Customers from './components/Customers';
import { isAuthenticated } from './auth';

const LazyLoadedCustomers = React.lazy(() => import('./components/Customers'));

export default function Routes({ onLoginSubmit }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard">
        {isAuthenticated() ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/customers">
        <LazyLoadedCustomers />
      </Route>
      <Route path="/customer/:id">
        {' '}
        <SingleCustomer />
      </Route>
      <Route path="/customer/:id/:action">
        <SingleCustomer />
      </Route>
      <Route exact path="/login">
        {isAuthenticated() ? (
          <Redirect to="/dashboard" />
        ) : (
          <Login onLoginSubmit={onLoginSubmit} />
        )}
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
