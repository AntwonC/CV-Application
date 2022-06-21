/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../styles/generalInformation.css';

// eslint-disable-next-line react/prefer-stateless-function
class GeneralInformationSection extends Component {
  // eslint-disable-next-line class-methods-use-this

  render() {
    const {
      name, email, phone, disabled,
    } = this.props;

    return (
      <div id="container">
        <label htmlFor="name" id="label-name">Full Name</label>
        <input type="text" id="name" name="nameInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="email" id="label-email">Email</label>
        <input type="email" id="email" placeholder="placeholder@gmail.com" name="emailInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="phone" id="label-phone">Phone</label>
        <input type="tel" id="phone" placeholder="999-999-9999" name="phoneInput" disabled={disabled} onChange={this.props.inputChange} />
        <button
          type="submit"
          id="buttonGeneral"
          onClick={this.props.onClick}
        >
          Submit General Data
        </button>
      </div>
    );
  }
}

export default GeneralInformationSection;
