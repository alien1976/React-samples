import React from 'react';
import './Item.css';

export default function Item(props) {
    function classNames(classes) {
        return Object.entries(classes)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)
            .join(' ');
    }

    const itemWrapperClassNames = classNames({
        'item-wrapper': true,
        'active-item': props.isActive
    });
    console.log(itemWrapperClassNames)

    function getBackgroundImage(rarity) {
        return `linear-gradient(to right, white, ${rarity})`;
    }

    function constructItemType(itemType, id) {
        return `${itemType ? itemType[0] : ''}${id}`;
    }

    return (
        <div className={itemWrapperClassNames} style={{ backgroundImage: getBackgroundImage(props.rarity) }}>
            <div className="item-type" style={{ color: props.rarity === 'white' ? 'black' : 'rarity' }}>
                <b>{constructItemType(props.type.toUpperCase(), props.id)}</b>
            </div>
            <div className="item-name">
                <b>{props.titleid}</b>
            </div>
        </div >
    )
}