import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const fetchAddContact = createAsyncThunk(
  '/contacts/fetchAddContact',
  async params => {
    return await axios.post('/contacts', params);
  }
);

export const fetchRemoveContact = createAsyncThunk(
  '/contacts/fetchRemoveContact',
  async id => {
    return await axios.delete(`/contacts/${id}`);
  }
);

export const fetchAuth = createAsyncThunk(
  '/auth/fetchUserData',
  async params => {
    const { data } = await axios.post('/users/login', params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  '/auth/fetchRegister',
  async params => {
    const newParams = { ...params, password: Number(params.password) };
    const { data } = await axios.post('/users/signup', newParams);
    return data;
  }
);

export const fetchIsAuth = createAsyncThunk('/auth/fetchIsAuth', async () => {
  const { data } = await axios.get('/users/current');
  return data;
});
