import React, { useState } from 'react';
import '../styles/Formulario.css'; 

function Formulario() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = (peso, altura) => {
    if (peso > 0 && altura > 0) {
      return peso / (altura * altura);
    }
    return 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const resultadoIMC = calcularIMC(pesoNum, alturaNum);
    setImc(resultadoIMC.toFixed(2)); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>
            Peso (kg):
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              step="any" 
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Altura (m):
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              step="any" 
            />
          </label>
        </div>
        <button type="submit" className="submit-btn">Calcular IMC</button>
        {imc !== null && (
          <div className="result">
            <h2>O Valor do seu IMC é: {imc}</h2>
          </div>
        )}
      </form>
    </div>
  );
}

export default Formulario;
