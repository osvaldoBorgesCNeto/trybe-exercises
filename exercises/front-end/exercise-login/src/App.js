import { Route } from 'react-router-dom';
import './App.css';
import Client from './routes/Client';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/client" component={ Client } />
      <Route path="/register" component={ Register } />
    </div>
  );
}

export default App;
