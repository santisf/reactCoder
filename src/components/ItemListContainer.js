import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import CountItem from './CountItem';
import { pedirDatos } from './helpers/pedirDatos';
import ProductCard from './ProductCard';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    
   
    useEffect(() => {
       setLoading(true)

       pedirDatos()

       .then ((resp)=>{
           setProductos(resp)
       })

       .catch ((error)=>{
        console.log(error)
    })

        .finally (()=>{
            setLoading(false)
    })
    }, [])

    return (
        <div className='row'>
            <h1 className="title-landing">{greeting}</h1>
            <hr/>
            {
                loading
                    ? <h2>Cargando..</h2>
                    : <ItemList productos={productos}/>
            }
          
            
        </div>
    )
}

export default ItemListContainer
