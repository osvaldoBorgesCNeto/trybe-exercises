import './App.css';
import React from 'react';
import AlbumRender from './components/AlbumRender';
import UserRender from './components/UserRender';
import OrderRender from './components/OrderRender';
import Shopping from './components/ShoppingList';

class App extends React.Component {
  render() {
    return (
     <Shopping />
    );
  }
}

export default App;
