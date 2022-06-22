/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/EducationInformation.css';

class EducationInformation extends Component {
  render() {
    const {
      school, major, degree, dateOfStudy, disabled,
    } = this.props;
    return (
      <div id="education-container">
        <label htmlFor="school" id="label-school">University Name</label>
        <input type="text" id="school" name="schoolInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="major" id="label-major">Field of Study</label>
        <input type="text" id="major" name="majorInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="degree" id="label-degree">Degree</label>
        <input type="text" id="degree" name="degreeInput" disabled={disabled} onChange={this.props.inputChange} />
        <label htmlFor="date" id="label-date">Date Finished</label>
        <input type="text" id="date" name="dateOfStudyInput" disabled={disabled} onChange={this.props.inputChange} />
        <div id="button-Container">
          <button
            type="button"
            id="buttonEditEdu"
            onClick={this.props.editClicked}
          >
            Edit

          </button>
          <button
            type="submit"
            id="buttonEducation"
            onClick={this.props.onClick}
          >
            Submit Education Data
          </button>
        </div>
      </div>
    );
  }
}

export default EducationInformation;
