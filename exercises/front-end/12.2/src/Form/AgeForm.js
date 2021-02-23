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