import { List,ListItem,ListItemText , Btn} from "./ContactList.styled";

export const ContactListItem = ({ contact, onDelete }) => {
  return (
    <ListItem id={contact.id}>
      <ListItemText>
              <b>{contact.name}</b> : {contact.number}
               </ListItemText>
     <Btn
     type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </Btn>
    </ListItem>
  );
}


export const ContactList = ({ contacts,filter,onDelete}) => {
 if (filter !== '') {
    return;
  }

  return (
    <List >
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}