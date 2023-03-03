import React, {useState} from 'react'
import foto from '../ImagenesDescargadas/Dibujos/foto-arbol.jpg'
import fotoChica from '../ImagenesDescargadas/Dibujos/foto-dibujo-chica.jpg'
import fotoGirafa from '../ImagenesDescargadas/Dibujos/foto-girafa.jpg'
import fotoUnicornio from '../ImagenesDescargadas/Dibujos/foto-unicornio.jpg'

const CambioDeFotos = () => {

    const [fotoInicial, setFoto] = useState(foto);

    const Img1 = () =>{
        let Img1 = fotoChica;
        setFoto(Img1);
    }

    const Img2 = () =>{
        let Img2 = fotoGirafa;
        setFoto(Img2);
    }

    const Img3 = () =>{
        let Img3 = fotoUnicornio;
        setFoto(Img3);
    }

  return (
    <div>
        <img src={fotoInicial} alt="foto de un arbol"/>
       <p> Cambie su foto </p> 
       <button onClick={Img1}> Img 1 </button>
       <button onClick={Img2}> Img 2 </button>
       <button onClick={Img3}> Img 3 </button>
    </div>
  )
}

export default CambioDeFotos
