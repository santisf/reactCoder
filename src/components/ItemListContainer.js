import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import CountItem from './CountItem';
import { pedirDatos } from './helpers/pedirDatos';
import ProductCard from './ProductCard';


const ItemListContainer = ({greeting}) => {
    
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    
   let productosJSX=  productos.map((prod)=>(
    <ProductCard 
    title={prod.name} 
    price={prod.price}
    desc={prod.desc}
    img={prod.img}/>
))
   console.log(productosJSX);
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
                    :<div className="Container-fluid">
                        <div className="row">
                            {productosJSX}
                       </div>
                    </div>
            }
          
            
        </div>
    )
}

export default ItemListContainer
