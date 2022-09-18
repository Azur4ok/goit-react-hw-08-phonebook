import React from 'react';
import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';

export const UserMenu = ({ email, onClickLogout }) => {
  return (
    <>
      <span>{email}</span>
      <Button onClick={onClickLogout} variant="contained" color="error">
        logout
      </Button>
    </>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};
