import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ContactForm, Filter, ContactList } from '../../components';
import { selectIsAuth } from '../../redux/slices/auth';
import { fetchContacts } from '../../redux/thunks';
import { isLoaded, getContacts } from 'redux/slices/contacts';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const contacts = useSelector(getContacts);
  const status = useSelector(isLoaded);

  React.useEffect(() => {
    dispatch(fetchContacts());
    if (!isAuth) {
      navigate('/');
    }
    //eslint-disable-next-line
  }, [status]);

  return (
    <div className={styles.container}>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        status === 'loading' ? (
          <div className={styles.notification}>loading...</div>
        ) : (
          <ContactList />
        )
      ) : (
        <h2 className={styles.notification}>Contact list is empty</h2>
      )}
    </div>
  );
};
