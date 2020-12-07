import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" disabled={!this.state.number}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  getContact: PropTypes.func.isRequired,
};

export default ContactForm;
