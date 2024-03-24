import React from 'react';

const Info = ({info}) => {

    if(Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES } = info;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
            </div>
            <div className="card-footer">
                <div className="row">
                    <a className="col-md-4 col-sm-12 w-100" href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-3x"></i>
                    </a>
                    <a className="col-md-4 col-sm-12" href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-3x"></i>
                    </a>
                    <a className="col-md-4 col-sm-12" href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm fa-3x"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Info;