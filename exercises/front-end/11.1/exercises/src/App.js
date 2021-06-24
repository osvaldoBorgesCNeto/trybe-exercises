import logo from './logo.svg';
import './App.css';
import { Component } from "react";

const list = ['Estudar', 'Jogar', 'AssistirFilme'];

const task = (value) => value.map(element => (<li>{element}</li>));

class App extends Component {
  render() {
    return (
    <div>
      <ul>
        {task(list)}
      </ul>
    </div>
    );
  }
}

export default App;
