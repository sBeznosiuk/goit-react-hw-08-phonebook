import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/auth/operations';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });

    const refs = {
      email: document.getElementById('email-login'),
      pass: document.getElementById('pass-login'),
    };

    refs.pass.value = '';
    refs.email.value = '';
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          <strong>Почта</strong>
          <input
            type="email"
            name="email"
            id="email-login"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <strong>Пароль</strong>
          <input
            type="password"
            name="password"
            id="pass-login"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Логин</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
