import {Fragment} from 'react';

const Nombre = ({nombre, edad}) => {
    return(
        <h1 className="nombre">
            <Fragment>Soy {nombre} tengo {edad} años</Fragment>
        </h1>
    )
}

export {Nombre};