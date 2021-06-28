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
import { Typography, Container, CssBaseline } from '@material-ui/core';

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
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                  <ContactForm {...props} />
                  <Typography
                    component="h2"
                    variant="h5"
                    style={{ marginTop: 30 }}
                  >
                    Contacts
                  </Typography>
                  <Filter {...props} />
                  <ContactList {...props} />
                </div>
              </Container>
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
