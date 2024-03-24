import axios from 'axios';
import React, {Fragment, useState, useEffect} from 'react';
import Cancion from './components/Cancion';
import Formulario from './components/Formulario';
import Info from './components/Info';


function App() {

  const [busquedaletra, setBusquedaletra] = useState({});
  const [ letra, setLetra] = useState('');
  const [ info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) {
      return;
    }
    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url_lyrics = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url_artist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;


      const [letra, informacion] = await Promise.all([
        axios.get(url_lyrics),
        axios.get(url_artist)
      ]);
      
      // console.log(letra, informacion);
      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);
    }
    consultarApiLetra();
  }, [busquedaletra])
  return (
    <Fragment>
      <Formulario setBusquedaletra={setBusquedaletra}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion cancion={letra}/>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;
