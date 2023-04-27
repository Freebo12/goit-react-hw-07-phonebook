import { BtnDelete } from './ListElem.stlyed';
import { deleteContact } from 'components/Redux/operations';
import { useDispatch } from 'react-redux';

export const ListElem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <li>
        <span>
          {contact.name}:<span>{contact.number}</span>
        </span>
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </li>
    </>
  );
};
