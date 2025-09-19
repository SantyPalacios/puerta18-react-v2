import React, { useState } from 'react';

const CalculadoraRED = () => {
  const [sexo, setSexo] = useState('hombre');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [edad, setEdad] = useState('');
  const [actividad, setActividad] = useState('1.25');
  const [resultado, setResultado] = useState('');

  const calcularRED = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const edadNum = parseInt(edad);
    const actividadNum = parseFloat(actividad);

    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(edadNum)) {
      setResultado("Por favor, completa todos los campos con valores válidos.");
      return;
    }

    let GEB = 0;
    if (sexo === 'hombre') {
      GEB = (10 * pesoNum) + (6.25 * alturaNum) - (5 * edadNum) + 5;
    } else {
      GEB = (10 * pesoNum) + (6.25 * alturaNum) - (5 * edadNum) - 161;
    }

    const RED = GEB * actividadNum;
    setResultado(`Tu requerimiento energético diario es de aproximadamente ${Math.round(RED)} kcal.`);
  };

  return (
    <div className='fondo3'>
      <div style={{ textAlign: 'center' }}>
        <h3 className='sombreado' style={{ textAlign: 'center' }}>
          Calculadora de RED
        </h3>
      </div>

      <label className='sombreado'>
        Sexo:
      </label>
      <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
        <option value="hombre" className='sombreado'>Hombre</option>
        <option value="mujer" className='sombreado'>Mujer</option>
      </select>
      <br /><br />

      <label className='sombreado'>Peso (kg):</label>
      <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      <br /><br />

      <label className='sombreado'>Altura (cm):</label>
      <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      <br /><br />

      <label className='sombreado'>Edad (años):</label>
      <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <br /><br />

      <label className='sombreado'>Actividad física:</label>
      <select value={actividad} onChange={(e) => setActividad(e.target.value)}>
        <option value="1.25" className='sombreado'> Sedentario </option>
        <option value="1.5" className='sombreado'> Moderada </option>
        <option value="1.75" className='sombreado'> Intensa </option>
        <option value="2" className='sombreado'> Muy intensa </option>
      </select>Si no sabes bien cual seria tu activ física clickea acá
<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
    <svg
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <div
    tabIndex={0}
    className="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm">
    <div tabIndex={0} className="card-body">
      <h2 className="card-title">You needed more info?</h2>
      <p>Here is a description!</p>
    </div>
  </div>
</div>
      <br /><br />

      <button onClick={calcularRED} className='sombreado'>Calcular RED</button>

      <p className='sombreado'>{resultado}</p>
    </div>
  );
};

export default CalculadoraRED;
