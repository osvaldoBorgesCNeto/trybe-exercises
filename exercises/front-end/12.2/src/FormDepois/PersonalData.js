import React from 'react';

class PersonalData extends React.Component {
  render() {
    const { handleChange, onBlurHandler, state} = this.props;

    return (
      <div>
        <fieldset>
          <legend>Personal Data</legend>
          <label>
            Name:
            <input type='text' name='name' value={ state.name } onChange={ handleChange } maxLength='40' required/>
          </label>

          <label>
            Email:
            <input type='text' name='email' value={ state.email } onChange={ handleChange } maxLength='50' required/>
          </label>

          <label>
            CPF:
            <input type='text' name='CPF' value={ state.CPF } onChange={ handleChange } maxLength='11' required/>
          </label>

          <label>
            Address
            <input type='text' name='address' value={ state.address } onChange={ handleChange } maxLength='200' required/>
          </label>

          <label>
            City
            <input type='text' name='city' value={ state.city } onChange={ handleChange } onBlur={ onBlurHandler } maxLength='28' required/>
          </label>

          <label>
            State
            <select name='state' value={ state.state } onChange={ handleChange } required>
              <option>Test</option>
            </select>
          </label>

          <label>
            Type:
            <label>
              <input type='radio' id='house' name='type' value={ state.type } onChange={ handleChange } required/>
              House
            </label>

            <label>
              <input type='radio' id='apartment' name='type' value={ state.type } onChange={ handleChange }/>
              Apartment
            </label>
            
          </label>
        </fieldset>
      </div>
    );
  }
}

export default PersonalData;