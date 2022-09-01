import { useState, useEffect } from 'react';
import { UserForm } from './ContactsForm/Form';
import { ContactList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { ListItemApp, ListItemText, Btn } from './Contacts/ContactList.styled';
import { Box } from './Box';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saveData = localStorage.getItem('lsData');
    const parsedData = JSON.parse(saveData);
    return saveData ? parsedData : [...initialContacts];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('lsData', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const id = nanoid();
    if (
      contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts(state => [
      ...state,
      { name: contact.name, number: contact.number, id: id },
    ]);
  };

  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChange = event => {
    setFilter(event.currentTarget.value);
  };

  const onFilter = () => {
    if (filter === '') {
      return;
    }

    return contacts.map(contact => {
      if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
        return (
          <ListItemApp key={contact.id}>
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
          </ListItemApp>
        );
      }
      return null;
    });
  };

  return (
    <Box width={380} listStyle="none" ml="45px" mt="20px" p="0">
      <h1>Phonebook</h1>
      <UserForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} value={filter} onFilter={onFilter} />
      <ContactList contacts={contacts} filter={filter} onDelete={onDelete} />
    </Box>
  );
};
