import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class Client extends React.Component {
  render() {
    const { user, clients } = this.props;

    if (!user[0].email) {
      alert('Login não efetuado');
      return <Redirect to="/login" />;
    };
    
    if (clients.length === 0) {
      return (
      <div>
        <p>Nenhum cliente cadastrado</p>
        <Link to="/register">Cadastre!!!</Link>
      </div>)
    };

    return (
      <div>
        <Link to="/register">Cadastre!!!</Link>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Idade</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{client.name}</td>
                  <td>{client.age}</td>
                  <td>{client.email}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.clientReducer.user,
  clients: state.registerReducer.clients,
})

export default connect(mapStateToProps, null)(Client);