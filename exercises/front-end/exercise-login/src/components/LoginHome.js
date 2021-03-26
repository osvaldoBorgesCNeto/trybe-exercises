import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeHandleAction } from '../actions/changeHandleAction';
import { clientValidAction } from '../actions/clientValidAction';

class LoginHome extends React.Component {
  render() {
    const { changeHandle, clientValid, email, password} = this.props;
    return (
      <div>
        <div>
          <label htmlFor="email">
          Email:
            <input type="text" name="email" id="email" onChange={ changeHandle } required />
          </label>
          <label htmlFor="password">
          Password:
            <input type="password" name="password" id="password" onChange={ changeHandle } required />
          </label>
          <Link to="/client" onClick={ () => clientValid({email, password}) }><button>Enter</button></Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.clientReducer.email,
  password: state.clientReducer.password,
})

const mapDispatchToProps = (dispatch) => ({
  changeHandle: (event) => dispatch(changeHandleAction(event)),
  clientValid: (user) => dispatch(clientValidAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginHome);