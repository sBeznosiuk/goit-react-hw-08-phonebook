import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

const AuthNav = () => (
  <>
    <NavLink to="/register" exact>
      Регистрация
    </NavLink>
    <NavLink to="/login" exact>
      Логин
    </NavLink>

    <Route path="/register" component={Registration} />
    <Route path="/login" component={Login} />
  </>
);

export default AuthNav;
