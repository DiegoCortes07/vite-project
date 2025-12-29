// Paso 7: Este componente solo recibe y muestra el valor
// No necesita lógica propia, el padre (Calculator) maneja el estado
function ScreenCalculator({ numersInput }: { numersInput: string }) {
  return (
    <div className="screen-calculator" style={{ textAlign: "center" }}>
      <input type="text" value={numersInput} readOnly />
    </div>
  );
}

export default ScreenCalculator;
