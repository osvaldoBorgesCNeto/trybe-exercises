import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import FormError from './Form/FormError';
import FormDataDisplay from './Form/FormDataDisplay';
import { connect } from 'react-redux';

class App extends Component {
  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  render() {
    const { submitted, formError } = this.props;

    return (
      <main>
        <Form />
        <div className="container">
          <FormError formError={formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  submitted: state.formReducer.submitted,
  formError: state.formReducer.formError,
});

export default connect(mapStateToProps)(App);
