import React from 'react';

class LastWorkData extends React.Component {
  render() {
    const { handleChange, handleEnter, state } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Last Work Data</legend>
          <label>
            Curriculum:
            <textarea type='text' name='curriculum' value={ state.curriculum } onChange={ handleChange } maxLength='1000' required/>
          </label>

          <label>
            Office:
            <textarea type='text' name='office' value={ state.office } onChange={ handleChange } onMouseEnter={ handleEnter } maxLength='40' required/>
          </label>

          <label>
            Job description:
            <input type='text' name='jobDescription' value={ state.jobDescription } onChange={ handleChange } maxLength='500' required/>
          </label>

        </fieldset>
      </div>
    );
  }
}

export default LastWorkData;