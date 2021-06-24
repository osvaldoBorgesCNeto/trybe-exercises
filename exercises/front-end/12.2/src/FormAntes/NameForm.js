import React from 'react';

class NameForm extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    
    let erro = undefined;
    if (name.length > 10) erro = 'Nome muito grande!';
    
    return (
      <fieldset>
        <label>
          Nome:
          <input type="text" name="name" value={ name } onChange={ handleChange }/>
        </label>
        <span>{erro ? erro : ''}</span>
      </fieldset>
    );
  }
}

export default NameForm;