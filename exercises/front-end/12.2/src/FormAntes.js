import React from 'react';
import './Form.css';
import AgeForm from './FormAntes/AgeForm';
import NameForm from './FormAntes/NameForm';
import FruitsForm from './FormAntes/FruitsForm';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: 0,
      frutaFavorita: '',
      aboutMe: '',
      check: '',
      formularioComErros: { 
        name: '',
        age: 0,
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    this.setState({ [name]: value});
  }

  render() {
    return (
      <div>
        <h1>Formulario React</h1>
        <form className="form">
          <NameForm name={ this.state.name } handleChange={ this.handleChange }/>
          
          <AgeForm age={ this.state.age } handleChange={ this.handleChange }/>

          <FruitsForm frutaFavorita={ this.state.frutaFavorita } handleChange={ this.handleChange }/>          

          <label>
            Checkbox:
            <input type='checkbox' name="check" value={this.state.check} onChange={this.handleChange}/>
          </label>

          <fieldset>
            <label>
              Sobre voce:
              <textarea name="aboutMe" value={this.state.aboutMe} onChange={this.handleChange}/>
            </label>
          </fieldset>
          

        </form>
      </div>
    );
  }
}

export default Form;