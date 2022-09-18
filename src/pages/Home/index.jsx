import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';

import { selectIsAuth } from './../../redux/slices/auth';
import styles from './Home.module.scss';

export const Home = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div className={styles.app}>
      <Typography variant="h2">Phonebook</Typography>
      {isAuth && (
        <Link className={styles.link} to="/contacts">
          <Button variant="contained">get Contacts</Button>
        </Link>
      )}
    </div>
  );
};
