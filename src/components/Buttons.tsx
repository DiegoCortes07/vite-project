// Paso 5: Recibir la función como prop desde Calculator
function Buttons({ onButtonClick }: { onButtonClick: (value: string) => void }) {
  const handleButtonClick = (value: string) => {
    console.log("Button clicked:", value);
    // Paso 6: Llamar a la función del padre para actualizar la pantalla
    onButtonClick(value);
  };

  const buttons = [
    // Fila 1: Funciones especiales
    { value: "C", className: "btn-function" },
    { value: "±", className: "btn-function" },
    { value: "%", className: "btn-function" },
    { value: "÷", className: "btn-operator" },
    // Fila 2
    { value: "7", className: "btn-number" },
    { value: "8", className: "btn-number" },
    { value: "9", className: "btn-number" },
    { value: "×", className: "btn-operator" },
    // Fila 3
    { value: "4", className: "btn-number" },
    { value: "5", className: "btn-number" },
    { value: "6", className: "btn-number" },
    { value: "-", className: "btn-operator" },
    // Fila 4
    { value: "1", className: "btn-number" },
    { value: "2", className: "btn-number" },
    { value: "3", className: "btn-number" },
    { value: "+", className: "btn-operator" },
    // Fila 5
    { value: "0", className: "btn-number btn-zero" },
    { value: ".", className: "btn-number" },
    { value: "=", className: "btn-equals" },
  ];

  return (
    <div className="buttons-calculator">
      {buttons.map((btn) => (
        <button
          key={btn.value}
          className={btn.className}
          onClick={() => handleButtonClick(btn.value)}
        >
          {btn.value}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
