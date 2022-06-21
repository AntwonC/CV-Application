/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import GeneralInformationSection from './components/GeneralInformation';
import DisplayData from './components/DisplayData';
import EducationInformation from './components/EducationInformation';
import './styles/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      emailInput: '',
      phoneInput: '',
      schoolInput: '',
      majorInput: '',
      degreeInput: '',
      dateOfStudyInput: '',
      buttonGeneral: false,
      buttonEducation: false,
      disableInputGeneral: false,
      disableInputEdu: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();

    // console.log('Submitted data!');
    if (e.target.id === 'buttonEducation') {
      this.setState((prevState) => ({
        disableInputEdu: !prevState.disableInputEdu,
      }));
    } else {
      this.setState((prevState) => ({
        [e.target.id]: true,
        disableInputGeneral: !prevState.disableInputGeneral,
      }));
    }

  /*  setTimeout(() => {
      this.setState((prevState) => ({
        submitButton: !prevState.submitButton,
      }));
    }, 1000); */
  };

  handleInput = (evt) => {
    // console.log(evt.target.name);
    this.setState(() => ({
      [evt.target.name]: evt.target.value,
    }));
  };

  render() {
    const buttonClicked = this.state.buttonGeneral;
    const educationButtonClicked = this.state.buttonEducation;
    let display;
    if (buttonClicked && educationButtonClicked) {
      display = (
        <DisplayData
          name={this.state.nameInput}
          email={this.state.emailInput}
          phone={this.state.phoneInput}
          school={this.state.schoolInput}
          major={this.state.majorInput}
          degree={this.state.degreeInput}
          dateOfStudy={this.state.dateOfStudyInput}
        />
      );
    }
    return (
      <div>
        <form id="form-container">
          <GeneralInformationSection
            onClick={this.handleClick}
            inputChange={this.handleInput}
            name={this.state.nameInput}
            email={this.state.emailInput}
            phone={this.state.phoneInput}
            disabled={this.state.disableInputGeneral}
          />
          <EducationInformation
            onClick={this.handleClick}
            inputChange={this.handleInput}
            school={this.state.schoolInput}
            major={this.state.majorInput}
            degree={this.state.degreeInput}
            dateOfStudy={this.state.dateOfStudyInput}
            disabled={this.state.disableInputEdu}
          />
        </form>
        {display}
      </div>
    );
  }
}

export default App;
