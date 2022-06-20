import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import GeneralInformationSection from './components/generalInformation';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <form>
          <GeneralInformationSection />
        </form>
      </div>
    );
  }
}

export default App;
