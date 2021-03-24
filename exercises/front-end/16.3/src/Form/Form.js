import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetFormAction } from '../actions/resetFormAction';
import { sendFormAction } from '../actions/sendFormAction';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

class Form extends Component {
  render() {
    const { sendForm, resetForm } = this.props;

    return (
      <form>
        <PersonalForm
        />
        <ProfessionalForm />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(resetFormAction()),
  sendForm: () => dispatch(sendFormAction()),
});

export default connect(null, mapDispatchToProps)(Form);