import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchContacts,
  fetchRemoveContact,
} from './../thunks/index';

const initialState = {
  items: [],
  filter: '',
  status: 'loading',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'loaded';
    },
    [fetchContacts.rejected]: (state, action) => {
      state.status = 'error';
    },
    [fetchAddContact.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAddContact.fulfilled]: (state, action) => {
      state.status = 'loaded';
    },
    [fetchAddContact.rejected]: (state, action) => {
      state.status = 'error';
    },
    [fetchRemoveContact.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchRemoveContact.fulfilled]: (state, action) => {
      state.status = 'loaded';
    },
    [fetchRemoveContact.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const isLoaded = state => state.contacts.status;
export const getContacts = state => state.contacts.items;
