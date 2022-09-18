import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { fetchIsAuth } from './redux/thunks';
import { Header } from 'components/Header';
import { Registration } from 'pages/Registration';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';

export const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIsAuth());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
};
