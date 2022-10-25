import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';

export function ContactList({ contacts, onDelete }) {
  return (
    <>
      {contacts.map((contact, item) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
ContactList.propTypes =  {
  deleteContact: PropTypes.func.isRequired,
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
