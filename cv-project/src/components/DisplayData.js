/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class DisplayData extends Component {
  render() {
    const {
      name, email, phone, school, major, degree, dateOfStudy,
    } = this.props;
    return (
      <div>
        <div id="displayData">
          {name}
          {' '}
          {email}
          {' '}
          {phone}
          {' '}
          {school}
          {' '}
          {major}
          {' '}
          {degree}
          {' '}
          {dateOfStudy}
        </div>
      </div>
    );
  }
}

export default DisplayData;
