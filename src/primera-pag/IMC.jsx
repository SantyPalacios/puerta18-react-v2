

export default function IMC() {
    function calcularIMC() {
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);
      
      if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').textContent = "Por favor, introduce valores válidos.";
        return;
      }

      const imc = peso / (altura * altura);
      let categoria = "";

      if (imc < 18.5) {
        categoria = "Bajo peso";
      } else if (imc < 25) {
        categoria = "Podes seguir con el RED";
      } else if (imc < 29.9) {
        categoria = "Sobrepeso";
      } else {
        categoria = "Obesidad";
      }

      document.getElementById('resultado').textContent = `Tu IMC es ${imc.toFixed(2)} (${categoria})`;
    }
  return (
    <>
      <div className="fondo3" style={{ marginRight: "10px" }}>
   <div style={{ textAlign: "center" }}>
  <h3 className="sombreado" style={{ display: "inline-block" }}>
    Calcula tu IMC
  </h3>
</div>
    <br />
    <h4 className="sombreado" style={{marginRight:"20px"}}>
      Aca pone cuanto pesas (en Kg): 
    </h4> 
    <input type="number"id="peso" name="peso" step="1" style={{ maxWidth: "50px"}} onKeyDown={(e) => e.key === "Enter" && calcularIMC()}/>
    <br/>
    <h4 className="sombreado mr-5">
      Aca pone cuanto medis (en mtrs):
    </h4> 
    <input type="number" id="altura" name="altura" step="0.01" style={{ maxWidth: "50px"}} onKeyDown={(e) => e.key === "Enter" && calcularIMC()}/>
    <br/>
    <button onClick={calcularIMC} >
     <p className="btn">| apreta aca |</p> 
    </button>
    <br/> 
    <p id="resultado" className="sombreado"></p>
  </div>
    </>
  )
}
