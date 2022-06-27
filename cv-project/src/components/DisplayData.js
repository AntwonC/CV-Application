/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/DisplayData.css';

class DisplayData extends Component {
  render() {
    const {
      name, email, phone, school,
      major, degree, dateOfStudy,
      company, position, mainTasks, dateStart, dateEnd,
    } = this.props;
    return (
      <div>
        <div id="displayData">
          <div id="generalSection">
            <h1 className="header">General</h1>
            <div id="nameGen">
              Full Name:
              {' '}
              {name}
            </div>
            <div id="emailGen">
              Email:
              {' '}
              {email}
            </div>
            <div id="phoneGen">
              Phone:
              {' '}
              {phone}
            </div>
          </div>
          <div id="educationSection">
            <h1>Education</h1>
            <div id="schoolEdu">
              University Name:
              {' '}
              {school}
            </div>
            <div id="majorEdu">
              Major:
              {' '}
              {major}
            </div>
            <div id="degreeEdu">
              Degree:
              {' '}
              {degree}
            </div>
            <div id="dateEdu">
              Date Finished:
              {' '}
              {dateOfStudy}
            </div>
          </div>
          <div id="experienceSection">
            <h1>Work Experience</h1>
            <div id="companyExp">
              Company Name:
              {' '}
              {company}
            </div>
            <div id="positionExp">
              Position:
              {' '}
              {position}
            </div>
            <div id="mainTasksExp">
              Main Tasks:
              {' '}
              {mainTasks}
            </div>
            <div id="dateStartExp">
              Date Started:
              {' '}
              {dateStart}
            </div>
            <div id="dateEndExp">
              Date Ended:
              {' '}
              {dateEnd}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayData;
