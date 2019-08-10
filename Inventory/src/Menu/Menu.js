import React from 'react';

const menuTabs = ["All", "Wepons", "Consumables"];

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "All",
            filterBy: ""
        }
    }

    handleClick = (event) => {
        this.setState({
            activeTab: event.target.name
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return <div className="menu-wrapper">
            {
                menuTabs.map((tabName) => (
                    <button key={tabName.toLowerCase()} name={tabName} className="button" onClick={this.handleClick}>{tabName}</button>
                ))
            }
        </div>
    }
}