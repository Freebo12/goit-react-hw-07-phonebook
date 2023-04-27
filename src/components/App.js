import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ListContacts } from './ListContacts/ListContacts';
import { fetchContacts } from './Redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from './Redux/selectors';
import { getState } from './Redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'}>
        <PhoneBook />
      </Section>
      <Section title={'Contacts'}>
        <SearchFilter />
        <ListContacts />
      </Section>
    </>
  );
};
