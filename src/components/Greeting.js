import React from 'react';

function Greeting(props) {
    return (
        <div>
            <h1>QUIUBOO {props.name}</h1>
        </div>
    );
}

export default Greeting

//LOS COMPONENTES SIEMPRE SE EXPORTAN POR DEFECTO.
//LOS COMPONENTES CON USOS MULTIPLES SE EXPORTAN CON {}.
//JSX