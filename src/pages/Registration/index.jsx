import React from 'react';
import { Typography, TextField, Paper, Button, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from './../../redux/slices/auth';
import { fetchRegister } from '../../redux/thunks';
import styles from './Registration.module.scss';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const onSubmit = async values => {
    const data = await dispatch(fetchRegister(values));
    if ('token' in data?.payload) {
      window.localStorage.setItem('token', data?.payload?.token);
    }
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        register account
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          {...register('name', { required: 'enter a name' })}
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
          label="name"
          fullWidth
        />
        <TextField
          className={styles.field}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'enter an email' })}
          label="E-Mail"
          type="email"
          fullWidth
        />
        <TextField
          className={styles.field}
          {...register('password', { required: 'enter a password' })}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          label="password"
          type="password"
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Sign up
        </Button>
      </form>
    </Paper>
  );
};
