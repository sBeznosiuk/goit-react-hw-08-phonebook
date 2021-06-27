import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import ContactForm from './Components/ContactForm';
import AppBar from './Components/AppBar';
import { Route } from 'react-router-dom';
import { getCurrentUser } from './redux/auth/operations';
import { connect } from 'react-redux';

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
        <Route
          path="/contacts"
          render={() => (
            <>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
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
