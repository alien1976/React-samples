import React from 'react';
import Menu from './Menu/Menu.js';
import './App.css';
import Inventory from './Inventory/Inventory.js';

function InventoryWrapper(props) {
  return (
    <div className="wrapper">
      {props.menu}
      <div className="inventory-wrapper">
        {props.inventory}
      </div>
      <div className="details-wrapper">
        {props.details}
      </div>
      <div className="log-wrapper">
        {props.log}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <InventoryWrapper menu={<Menu></Menu>} inventory={<Inventory></Inventory>}></InventoryWrapper>
    </div>

  );
}

export default App;
