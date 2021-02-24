import React from 'react';

class LastWorkData extends React.Component {
  render() {
    const { name, email, CPF, address, city, state, type, curriculum, office, jobDescription } = this.props.state;

    return (
      <div id='final-form'>
        <p>Name: { name }</p>
        <p>Email: { email }</p>
        <p>CPF: { CPF }</p>
        <p>Address: { address }</p>
        <p>City: { city }</p>
        <p>State: { state }</p>
        <p>Type: { type }</p>
        <p>Curriculum: { curriculum }</p>
        <p>Office: { office }</p>
        <p>Job Description: { jobDescription }</p>
      </div>
    );
  }
}

export default LastWorkData;