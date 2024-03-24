import React, { Fragment } from 'react';

const Cancion = ({cancion}) => {
    if (cancion.length === 0)
    {
        return null;
    }
    else
    {
        return ( 
            <Fragment>
                <h2>
                    Letra de canción
                </h2>
                <p className="letra">
                    {cancion}
                </p>
            </Fragment>
         );
    }
}
 
export default Cancion;