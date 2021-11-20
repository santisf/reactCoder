import React, {useState} from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';

const CountItem = ({stock}) => {
    
    const [counter, setCounter] = useState(1);

    const incrementar = () => {

        if(counter<stock){

            setCounter(counter+1);

        }else{

            alert("No hay suficiente stock")

        }
       

    }
    
    const decrementar = () => {

        if(counter>0){

            setCounter(counter-1);

        }else{
            alert("No se puede disminuir mas")
        }
        

    }
   const mensaje = ()=> alert("Agregaste "+counter+" productos al carrito")

    return (
        <div>
            <div>
                <h2>{counter}</h2>
                <Button variant="primary" style={{margin: "20px"}} onClick={decrementar}>-</Button>
                <Button variant="primary" style={{margin: "20px"}} onClick={incrementar}>+</Button>
            </div> 
            <div>
                <Button variant="primary"  onClick={mensaje}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default CountItem
