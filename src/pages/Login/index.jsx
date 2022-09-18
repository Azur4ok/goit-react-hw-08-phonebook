import React from 'react';
import { Typography, TextField, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsAuth } from './../../redux/slices/auth';
import { fetchAuth } from './../../redux/thunks/index';
import styles from './Login.module.scss';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (isAuth) {
    navigate('/');
  }

  const onSubmit = async values => {
    const data = await dispatch(fetchAuth(values));
    if (!data?.payload) {
      return alert('invalid email or password');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data?.payload?.token);
    }
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          label="E-Mail"
          className={styles.field}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'enter an email' })}
          fullWidth
        />
        <TextField
          type="password"
          className={styles.field}
          {...register('password', { required: 'enter a password' })}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          label="password"
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          login
        </Button>
      </form>
    </Paper>
  );
};
