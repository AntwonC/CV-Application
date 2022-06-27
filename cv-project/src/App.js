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
import ExperienceInformation from './components/ExperienceInformation';
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
      companyInput: '',
      positionInput: '',
      mainTasksInput: '',
      dateStartInput: '',
      dateEndedInput: '',
      buttonGeneral: false,
      buttonEducation: false,
      buttonExperience: false,
      disableInputGeneral: false,
      disableInputEdu: false,
      disableInputExp: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();

    // console.log('Submitted data!');
    if (e.target.id === 'buttonEducation') {
      this.setState(() => ({
        [e.target.id]: true,
        disableInputEdu: true,
      }));
    } else if (e.target.id === 'buttonExperience') {
      this.setState(() => ({
        [e.target.id]: true,
        disableInputExp: true,
      }));
    } else {
      this.setState(() => ({
        [e.target.id]: true,
        disableInputGeneral: true,
      }));
    }
  };

  handleEditClick = (evt) => {
    if (evt.target.id === 'buttonEditGen') {
      this.setState(() => ({
        disableInputGeneral: false,
      }));
    } else if (evt.target.id === 'buttonEditExperience') {
      this.setState(() => ({
        disableInputExp: false,
      }));
    } else if (evt.target.id === 'buttonEditEdu') {
      this.setState(() => ({
        disableInputEdu: false,
      }));
    }
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
    const experienceButtonClicked = this.state.buttonExperience;
    let display;
    if (buttonClicked && educationButtonClicked && experienceButtonClicked) {
      display = (
        <DisplayData
          name={this.state.nameInput}
          email={this.state.emailInput}
          phone={this.state.phoneInput}
          school={this.state.schoolInput}
          major={this.state.majorInput}
          degree={this.state.degreeInput}
          dateOfStudy={this.state.dateOfStudyInput}
          company={this.state.companyInput}
          position={this.state.positionInput}
          mainTasks={this.state.mainTasksInput}
          dateStart={this.state.dateStartInput}
          dateEnd={this.state.dateEndedInput}
        />
      );
    }
    return (
      <div>
        <form id="form-container">
          <GeneralInformationSection
            onClick={this.handleClick}
            inputChange={this.handleInput}
            editClicked={this.handleEditClick}
            name={this.state.nameInput}
            email={this.state.emailInput}
            phone={this.state.phoneInput}
            disabled={this.state.disableInputGeneral}
          />
          <EducationInformation
            onClick={this.handleClick}
            inputChange={this.handleInput}
            editClicked={this.handleEditClick}
            school={this.state.schoolInput}
            major={this.state.majorInput}
            degree={this.state.degreeInput}
            dateOfStudy={this.state.dateOfStudyInput}
            disabled={this.state.disableInputEdu}
          />
          <ExperienceInformation
            onClick={this.handleClick}
            inputChange={this.handleInput}
            editClicked={this.handleEditClick}
            company={this.state.companyInput}
            position={this.state.positionInput}
            mainTasks={this.state.mainTasksInput}
            dateStart={this.state.dateStartInput}
            dateEnd={this.state.dateEndedInput}
            disabled={this.state.disableInputExp}
          />
        </form>
        {display}
      </div>
    );
  }
}

export default App;
