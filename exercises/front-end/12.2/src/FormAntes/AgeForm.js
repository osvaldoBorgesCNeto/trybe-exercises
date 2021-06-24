import React from 'react';

class AgeForm extends React.Component {
  render() {
    const { age, handleChange } = this.props;
    
    return (
      <fieldset>
         <label>
          Idade:
          <input type="number" name="age" value={ age } onChange={ handleChange }/>
        </label>
      </fieldset>
    );
  }
}

export default AgeForm;

updateError = (bool) => { this.setState({ formWithErro: bool })
  }

  handleErro(name, value) {
    switch(name) {
      case 'name':
        const nameErro = !(value.length > 10);
        this.updateError(nameErro)
        break;
      case 'email':
        const emailErro = !(value.length > 50);
        this.updateError(emailErro)
        break;
      case 'CPF':
        const CPFErro = !(value.length > 11);
        this.updateError(CPFErro)
        break;
      case 'address':
        const addressErro = !(value.length > 200);
        this.updateError(addressErro)
        break;
      case 'city':
        const cityErro = !(value.length > 40);
        this.updateError(cityErro)
        break;
      case 'state':
        break;
      case 'type':
        break;
      default:
        break;
    }
  }