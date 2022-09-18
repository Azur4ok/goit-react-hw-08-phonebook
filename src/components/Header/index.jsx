import React from 'react';

import { Container, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout, selectIsAuth } from './../../redux/slices/auth';
import { UserMenu } from 'components/UserMenu';
import styles from './Header.module.scss';


export const Header = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(selectIsAuth);
  const email = useSelector(state => state.auth.data?.email);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      navigate('/')
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            Phonebook
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <UserMenu email={email} onClickLogout={onClickLogout} />
            ) : (
              <>
                <Link to="/login">
                  <Button variant="contained">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
