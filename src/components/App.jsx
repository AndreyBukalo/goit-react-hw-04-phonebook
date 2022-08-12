import React, { Component } from "react";
import { UserForm } from "./ContactsForm/Form";
import { ContactList } from "./Contacts/ContactsList";
import { Filter } from "./Filter/Filter";
import { ListItemApp ,ListItemText,Btn} from "./Contacts/ContactList.styled";
import { Box } from "./Box";




export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  };
 
  addContact = contact => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  
  }

   onDelete = id => {
    const newArray = this.state.contacts.filter(c => c.id !== id);
    this.setState(prevState => ({
      contacts: [...newArray],
    }));
  };

   onChange = event => {
        const { name,value } = event.currentTarget;
        this.setState({ [name]: value });
    };

  onFilter = () => {
    if (this.state.filter === '') {
      return;
    }
    return this.state.contacts.map(contact => {
      if (
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ) {
        return (
          <ListItemApp key={contact.id}>
            <ListItemText >
              <b>{contact.name}</b> : {contact.number}
            </ListItemText>
            <Btn
              type="button"
              onClick={() =>{
          this.onDelete(contact.id);
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

  render() {
    return (
      <Box width={380}
        listStyle="none"
        ml="45px"
        mt="20px"
        p="0">
        <h1>Phonebook</h1>
        <UserForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.onChange}
          value={this.state.filter}
          onFilter={this.onFilter} />
         <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete} />

      </Box>
    )
  }
}



   