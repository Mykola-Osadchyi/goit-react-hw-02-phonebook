import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import userContacts from './userContacts.json';

class App extends Component {
  state = {
    contacts: userContacts,
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    const getDublicateContact = () =>
      this.state.contacts.find(contact => contact.name === newContact.name);

    if (getDublicateContact()) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const filteredContacts = this.findContact();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          filterData={this.changeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
