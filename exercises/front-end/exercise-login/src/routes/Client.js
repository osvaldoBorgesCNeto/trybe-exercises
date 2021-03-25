import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Client extends React.Component {
  render() {
    const { user } = this.props;

    if (!user[0].email) {
      alert('Login não efetuado');
      return <Redirect to="/login" />;
    }

    return (
      <div>
        Client
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.clientReducer.user,
})

export default connect(mapStateToProps, null)(Client);