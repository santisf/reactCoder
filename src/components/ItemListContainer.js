import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {
    return (
        <div className='row'>
            <h1 className="title-landing">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
