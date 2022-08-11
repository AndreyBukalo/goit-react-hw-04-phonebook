import React, { Component } from "react";
import { UserForm } from "./ContactsForm/Form";
import { ContactList } from "./Contacts/ContactsList";




export class App extends Component {
  state = {
    contacts: [],
    name: '',
    
  };
 
  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
    console.dir(contact)
  }

  render() {
    return (
      <>
        <UserForm onSubmit={this.addContact} />
        <ContactList contacts={this.state.contacts}/>

      </>
    )
  }
}



   