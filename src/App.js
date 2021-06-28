import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import ContactForm from './Components/ContactForm';
import AppBar from './Components/AppBar';
import { Route } from 'react-router-dom';
import { getCurrentUser } from './redux/auth/operations';
import { connect } from 'react-redux';
import PrivateRoute from './Components/routes/PrivateRoute';
import Login from './Components/Login';
import Registration from './Components/Registration';
import PublicRoute from './Components/routes/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <>
        <Route
          path="/"
          render={props => <AppBar {...props} isAuthenticated={true} />}
        />
        <PublicRoute path="/register" component={Registration} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute
          path="/contacts"
          render={props => (
            <>
              <ContactForm {...props} />
              <h2>Contacts</h2>
              <Filter {...props} />
              <ContactList {...props} />
            </>
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  getUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
