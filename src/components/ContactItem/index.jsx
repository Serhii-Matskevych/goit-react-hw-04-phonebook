import PropTypes from 'prop-types';
import {
  ListItem,
  NumByOrder,
  TelNum,
  DelBtn,
} from '../ContactList/ContactList.styled';

export function ContactItem({ contact, item, onDelete }) {
  return (
    <ListItem>
      <NumByOrder>{item + 1}</NumByOrder>
      {contact.name}: <TelNum>{contact.number}</TelNum>
      <DelBtn type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
   name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};
