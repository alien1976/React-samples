import React from 'react';
import './Inventory.css';
import Item from './Item';
import ITEMS from '../data.json';
export default class Inventory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'All',
            items: ITEMS.player.inventoryitems,
            activeItemId: ITEMS.player.inventoryitems[0].id
        };
        console.log(this.state.items);
    }

    handleClick = (event) => {
        this.setState({
            activeTab: event.target.name
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return <div className='inventory-wrapper'>
            {
                this.state.items.map((item) => (
                    <Item key={item.id} isActive={item.id === this.state.activeItemId} titleid={item.titleid} id={item.id} type={item.type} rarity={item.rarity}></Item>
                ))
            }
        </div>
    }
}