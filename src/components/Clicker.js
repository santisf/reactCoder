import React, { useState } from 'react'

const Clicker = () => {
    let [clicks, setClicks]= useState(0);
    const sumarClicks = ()=>{

        setClicks(clicks+1);

    }
    return (
        <div onClick={sumarClicks}>
            <p>Clicks: {clicks}</p>
        </div>
    )
}

export default Clicker
