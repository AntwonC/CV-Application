/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../styles/generalInformation.css';

// eslint-disable-next-line react/prefer-stateless-function
class GeneralInformationSection extends Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      emailInput: '',
      phoneInput: '',
    };

    // this.handleInput = this.handleInput.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick = (e) => {
    e.preventDefault();

    console.log('Submitted data!');
  };

  handleInput = (evt) => {
    console.log(evt.target.name);
    this.setState(() => ({
      [evt.target.name]: evt.target.value,
    }));
  };

  render() {
    return (
      <div id="container">
        <label htmlFor="name" id="label-name">Full Name</label>
        <input type="text" id="name" name="nameInput" onChange={this.handleInput} />
        <label htmlFor="email" id="label-email">Email</label>
        <input type="email" id="email" placeholder="placeholder@gmail.com" name="emailInput" onChange={this.handleInput} />
        <label htmlFor="phone" id="label-phone">Phone</label>
        <input type="tel" id="phone" placeholder="999-999-9999" name="phoneInput" onChange={this.handleInput} />
        <button
          type="submit"
          id="button-submit"
          onClick={this.handleClick}
        >
          Submit Data
        </button>
      </div>
    );
  }
}

export default GeneralInformationSection;
