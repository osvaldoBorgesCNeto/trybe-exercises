import React from 'react';

class FruitsForm extends React.Component {
  render() {
    const { frutaFavorita, handleChange } = this.props;
    
    return (
      <fieldset>
        <label>
            Fruta Favorita:
            <select name='frutaFavorita' value={ frutaFavorita } onChange={ handleChange }>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </label>
      </fieldset>
    );
  }
}

export default FruitsForm;