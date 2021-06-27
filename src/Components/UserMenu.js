import React from 'react';
import { connect } from 'react-redux';
import { getUserEmail } from '../redux/auth/auth-selectors';
import { logout } from '../redux/auth/operations';
import { NavLink } from 'react-router-dom';

const UserMenu = ({ email, onLogout }) => (
  <>
    <div>
      <NavLink to="/contacts">Список контактов</NavLink>
    </div>
    <div>
      <p>{email}</p>
      <button type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  </>
);

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
