import React, {useState} from 'react'
import { Card } from 'react-bootstrap';
import { ButtonGroup, Button } from 'react-bootstrap';
import CountItem from './CountItem';
import "./ProductCard.css";

const ProductCard = ({title, desc, price, img}) => {
    return (
        <div className="col-lg-4 cardsProductos">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <p>
                        {price}
                    </p>
                    <CountItem stock={5}/>
                </Card.Body>
        </Card>
      </div>
    )
}

export default ProductCard
