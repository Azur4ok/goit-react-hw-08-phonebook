import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contacts';
import { authReducer } from './slices/auth';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
