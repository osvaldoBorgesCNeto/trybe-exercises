import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;

    if (!(username === 'osvaldo' && password === '1234')) {
      alert('Access denied');
      return <Redirect to="/" />;
    }
    return (<p>'Welcome {username}!'</p>);
  }
}

export default StrictAccess;