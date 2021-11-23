import React from 'react'
import ProductCard from './ProductCard'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
const ItemList = ({productos}) => {
    let productosJSX=  productos.map((prod)=>(
        <ProductCard 
        title={prod.name} 
        price={prod.price}
        desc={prod.desc}
        img={prod.img}/>
    ))
    return (
        <Container>
            <Row>
                {productosJSX}
            </Row>
        </Container>
    )
}

export default ItemList
