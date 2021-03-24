import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const {
      name, email, cpf, address, city, countryState,
      addressType, resume, role, roleDescription
    } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { address }</div>
        <div> Cidade: { city }</div>
        <div> Estado: { countryState }</div>
        <div> Tipo de residência: { addressType }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resume }</div>
        <div> Cargo: { role }</div>
        <div> Descrição do cargo: { roleDescription }</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.formReducer.name,
  email: state.formReducer.email,
  cpf: state.formReducer.cpf,
  address: state.formReducer.address,
  city: state.formReducer.city,
  countryState: state.formReducer.countryState,
  addressType: state.formReducer.addressType,
  resume: state.formReducer.resume,
  role: state.formReducer.role,
  roleDescription: state.formReducer.roleDescription,
});

export default connect(mapStateToProps)(FormDataDisplay);