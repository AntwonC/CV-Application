/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/ExperienceInformation.css';

class ExperienceInformation extends Component {
  render() {
    const {
      company, position, mainTasks, dateStart, dateEnd, disabled,
    } = this.props;
    return (
      <div id="experience-Container">
        <label htmlFor="company" id="label-company">Company</label>
        <input type="text" id="company" name="companyInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="position" id="label-position">Position</label>
        <input type="text" id="position" name="positionInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="mainTasks" id="label-mainTasks">Main Tasks</label>
        <textarea
          type="text"
          id="mainTasks"
          name="mainTasksInput"
          rows="4"
          cols="20"
          disabled={disabled}
          onChange={this.props.inputChange}
        />
        <label htmlFor="dateStart" id="label-dateStart">Date Started</label>
        <input type="date" id="dateStart" name="dateStartInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="dateEnded" id="label-dateEnded">Date Ended</label>
        <input type="date" id="dateEnded" name="dateEndedInput" disabled={disabled} onChange={this.props.inputChange} />
        <div id="buttonExperienceContainer">
          <button
            type="button"
            id="buttonEditExperience"
            onClick={this.props.editClicked}
          >
            Edit

          </button>
          <button
            type="submit"
            id="buttonExperience"
            onClick={this.props.onClick}
          >
            Submit Experience Data
          </button>
        </div>
      </div>
    );
  }
}

export default ExperienceInformation;
