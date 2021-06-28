import PropTypes from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';

const ContactListItem = ({ id, name, number, onClickRemove }) => (
  <li id={id}>
    {name}: {number}
    <Button type="button" id={id} onClick={onClickRemove}>
      delete
    </Button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func,
};

export default ContactListItem;
