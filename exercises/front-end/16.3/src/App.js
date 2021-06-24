import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import FormError from './Form/FormError';
import FormDataDisplay from './Form/FormDataDisplay';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { submitted } = this.props;

    return (
      <main>
        <Form />
        <div className="container">
          <FormError />
        </div>
        { submitted && <FormDataDisplay /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  submitted: state.formReducer.submitted,
});

export default connect(mapStateToProps, null)(App);
