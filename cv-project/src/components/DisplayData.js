/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/DisplayData.css';

class DisplayData extends Component {
  render() {
    const {
      name, email, phone, school, major, degree, dateOfStudy,
    } = this.props;
    return (
      <div>
        <div id="displayData">
          <div id="generalSection">
            <div id="nameGen">
              {' '}
              {name}
              {' '}
            </div>
            {' '}
            {email}
            {' '}
            {phone}
          </div>
          <div id="educationSection">
            {school}

            {major}

            {degree}

            {dateOfStudy}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayData;
