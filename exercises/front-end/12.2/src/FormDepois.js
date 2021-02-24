import React from 'react';
import PersonalData from './FormDepois/PersonalData'

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
      formWithErro: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
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

  handleSubmit(event) {
    alert('Formulario concluido com sucesso!!!');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <PersonalData handleChange={ this.handleChange } onBlurHandler={ this.onBlurHandler } state={ this.state }/>
          <input type='submit' value='Enviar'/>
        </form>
      </div>
    );
  }
}

export default FormDepois;
