import React,  { useState } from 'react'

const Superficie = () => {
  
    const[altura, setAltura] = useState(null);
    const[base, setBase] = useState(null);
    const[total, SetTotal] = useState(0);

    const handleChangeInput1 = (e) =>{
        let alturaIngresada = e.target.value;
        setAltura(alturaIngresada);
    }

    const handleChangeInput2 = (e) =>{
        let baseIngresada = e.target.value;
        setBase (baseIngresada);
    }

    const calcular = (e) =>{
        let final = base * altura;
        SetTotal (final)
    }
  
    return (
    <div>
      <input type="number" onChange={handleChangeInput1} placeholder='Ingrese Altura del Rectangulo' />
      <input type="number" onChange={handleChangeInput2} placeholder='Ingrese Base del Rectangulo'/>
      <button onClick={calcular}> Calcular </button>
      <p> Su Superficie es {total} </p>

    </div>
  )
}

export default Superficie
