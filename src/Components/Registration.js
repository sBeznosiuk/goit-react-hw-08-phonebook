import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/operations';

class Registration extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });

    const refs = {
      name: document.getElementById('name-register'),
      email: document.getElementById('email-register'),
      pass: document.getElementById('pass-register'),
    };

    refs.name.value = '';
    refs.pass.value = '';
    refs.email.value = '';
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <strong>Имя</strong>
          <input
            type="text"
            name="name"
            id="name-register"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="email">
          <strong>Почта</strong>
          <input
            type="email"
            name="email"
            id="email-register"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <strong>Пароль</strong>
          <input
            type="password"
            name="password"
            id="pass-register"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Регистрация</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(Registration);
