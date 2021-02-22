import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeAzul: 0,
      numeroDeVermelho: 0,
      numeroDeVerde: 0,
    }
  }

  handleClick(color) {
    this.setState((estadoAnterior, _props) => ({ [color]: estadoAnterior[color] + 1 }));

    if ((this.state[color] + 1) % 2 === 0) {
      console.log('green')
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('numeroDeAzul')}>Azul: {this.state.numeroDeAzul}</button>
        <button onClick={() => this.handleClick('numeroDeVermelho')}>Vermelho: {this.state.numeroDeVermelho}</button>
        <button onClick={() => this.handleClick('numeroDeVerde')}>Verde: {this.state.numeroDeVerde}</button>
      </div>
    )
  }
}

export default App;
