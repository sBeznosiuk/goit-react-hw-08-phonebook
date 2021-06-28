import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <>
    <NavLink to="/register" exact>
      Регистрация
    </NavLink>
    <NavLink to="/login" exact>
      Логин
    </NavLink>
  </>
);

export default AuthNav;
