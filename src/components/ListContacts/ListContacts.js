import { ListElem } from '../ListElem/ListElem';
import { ListContactsStyle } from './ListContacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getValidContacts } from '../Redux/selectors';

export const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const visibleContacts = useSelector(getValidContacts);

  if (contacts.length !== 0) {
    return (
      <ListContactsStyle>
        {visibleContacts.map(contact => {
          return <ListElem key={contact.id} contact={contact} />;
        })}
      </ListContactsStyle>
    );
  }
};
