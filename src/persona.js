import React from 'react';
import './persona.css'

const Persona = props => {
    return(
        <div>
            <h1>{props.nombre}</h1>
            <h2>{props.bio}</h2>
        </div>
    );
};

export default Persona