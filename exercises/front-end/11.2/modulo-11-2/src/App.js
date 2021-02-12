import React from 'react';

import AlbumRender from './components_antes/AlbumRender';
import UserRender from './components_antes/UserRender';
import OrderRender from './components_antes/OrderRender';
import Shopping from './components_antes/ShoppingList';

import PokedexRender from './components_depois/PokedexRender';


class App extends React.Component {
  render() {
    return (
     <PokedexRender />
    );
  }
}

export default App;
