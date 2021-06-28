import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Button } from '@material-ui/core';

const ContactListItem = ({ id, name, number, onClickRemove }) => (
  <li id={id} className="con">
    <Typography component="p" variant="p">
      {name}: {number}
    </Typography>
    <button type="button" id={id} onClick={onClickRemove}>
      delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func,
};

export default ContactListItem;
