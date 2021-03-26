import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeHandleRAction } from '../actions/changeHandleRAction';
import { createClientAction } from '../actions/createClientAction';

class Register extends React.Component {
  render() {
    const { name, age, email, createClient, changeHandle } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" onChange={changeHandle} />
          </label>
          <label htmlFor="age">
            Idade:
            <input type="text" name="age" id="age" onChange={changeHandle} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" name="email" id="email" onChange={changeHandle} />
          </label>
          <button
            type="button"
            onClick={ () => createClient({ name, age, email })}
          >
            Registrar
          </button>
        </form>
        <Link to="/client">Cliente Cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.registerReducer.name,
  age: state.registerReducer.age,
  email: state.registerReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  createClient: (client) => dispatch(createClientAction(client)),
  changeHandle: (name, value) => dispatch(changeHandleRAction(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);