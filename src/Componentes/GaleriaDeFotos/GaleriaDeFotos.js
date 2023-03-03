import React from 'react'
import Perfil from '../Perfil/Perfil'
import './Galeria.css'

const GaleriaDeFotos = () => {
  return (
    <div >
      <h2 className='titulo-Galeria'>Galeria De Fotos</h2>
      <div className='galeria'>
      <Perfil/>
      <Perfil/>
      <Perfil/>
      <Perfil/>
      </div>
    </div>
  )
}

export default GaleriaDeFotos
