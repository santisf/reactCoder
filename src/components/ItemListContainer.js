import React from 'react';
import './ItemListContainer.css';
import CountItem from './CountItem';
const ItemListContainer = ({greeting}) => {
    return (
        <div className='row'>
            <h1 className="title-landing">{greeting}</h1>
            <CountItem stock="5"/>
        </div>
    )
}

export default ItemListContainer
