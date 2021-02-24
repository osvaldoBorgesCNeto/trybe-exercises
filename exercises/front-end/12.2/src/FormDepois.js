import React from 'react';
import LastWorkData from './FormDepois/LastWork';
import PersonalData from './FormDepois/PersonalData';
import FinalForm from './FormDepois/FinalForm';

class FormDepois extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      state: '',
      type: '',
      curriculum: '',
      office: '',
      jobDescription: '',
      alert: 0,
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange({ target }) {
    const { name } = target
    let value = (target.type === 'checkbox') ? target.checked : target.value;

    if (name === 'name') value = value.toUpperCase();

    if (name === 'address') value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    this.setState( { [name]: value });
  }

  onBlurHandler({ target }) {
    let { name, value } = target

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.setState( { [name]: value });
  }

  handleEnter() {
    if (this.state.alert === 0) {
      alert('Preencha com cuidado esta informação.')
      this.setState( { alert: 1 });
    };
  }

  handleSubmit(event) {
    alert('Formulario concluido com sucesso!!!');
    event.preventDefault();
    this.setState({ submitted: true })
  }



  render() {
    return (
      <div>
        <form className='form' onSubmit={ this.handleSubmit }>
          <PersonalData handleChange={ this.handleChange } onBlurHandler={ this.onBlurHandler } state={ this.state }/>
          <LastWorkData handleChange={ this.handleChange } handleEnter={ this.handleEnter }/>
          { this.state.submitted && <FinalForm state={ this.state } /> }
          <input type='submit' value='Send' onClick={ this.sendForm }/>
        </form>
      </div>
    );
  }
}

export default FormDepois;
