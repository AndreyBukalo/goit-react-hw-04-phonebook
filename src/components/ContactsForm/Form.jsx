import React, { Component } from "react";
import { nanoid } from 'nanoid';




export class UserForm extends Component {
    state = {
         name: '',
    }

    onChange = event => {
        const { name,value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const contact = {
            name: this.state.name,
            id:nanoid()
      }
        this.props.onSubmit(contact)
          this.reset()
       
    };
    
    reset = () => {
        this.setState({
            name:''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="">Name</label>
                <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange} />
                    <button type='Submit'>Жмакни</button>
            </form>
            
        )
    }
}