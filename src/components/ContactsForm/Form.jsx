import React, { Component } from "react";
import { FormStyle,Label,Input,Btn } from "./Form.styled";
import { nanoid } from 'nanoid';




export class UserForm extends Component {
    state = {
        name: '',
        number: ''
    }
    userId = nanoid();
    
    onChange = event => {
        const { name,value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const contact = {
            name: this.state.name,
            number:this.state.number,
            id: this.userId
      }
        this.props.onSubmit(contact)
          this.reset()
       
    };
    
    reset = () => {
        this.setState({
            name: '',
             number: ''
        })
    }

    render() {
        return (
            <FormStyle onSubmit={this.onSubmit}>
                <Label htmlFor="">Name
                <Input
                     value={this.state.name}
                    onChange={this.onChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                /></Label>
                <br/>
                <Label htmlFor="">Number
                    <Input
                         value={this.state.number}
                    onChange={this.onChange}
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  />
                </Label>
                    <Btn type='Submit'>Add to Contacts</Btn>
            </FormStyle>
            
        )
    }
}