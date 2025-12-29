import { useState } from "react";
import HeadCalculator from "./HeadCalculator";
import ScreenCalculator from "./ScreenCalculator";
import Buttons from "./Buttons";
import PlansSection from "./PlansSection";
import { evaluate } from "mathjs";

function Calculator() {
  // Paso 1: Estado que guarda lo que se muestra en pantalla
  const [display, setDisplay] = useState("0");
  // Estado para mostrar/ocultar la sección de planes
  const [showPlans, setShowPlans] = useState(false);

  const [plan, setPlan] = useState<string | null>(null);

  // Paso 2: Función para actualizar la pantalla
  const handleInput = (value: string) => {
    // Si no hay plan seleccionado y intenta hacer un cálculo, mostrar planes
    if (!plan && value === "=") {
      setShowPlans(true);
      return;
    }

    if (value === "C") {
      // Si presionan C, limpiamos la pantalla
      setDisplay("0");
      setShowPlans(false); // Cerrar planes al presionar C
    } else if (display === "0" && value !== ".") {
      // Si la pantalla muestra 0, reemplazamos con el nuevo valor
      setDisplay(value);
    } else if (value === "=") {
      try {
        const sanitizedExpression = display
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/±/g, "-")
          .replace(/%/g, "/100");

        const result = evaluate(sanitizedExpression);
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      // Si no, agregamos el nuevo valor al final
      setDisplay(display + value);
    }
  };

  const handleSelectPlan = (selectedPlan: string) => {
    setPlan(selectedPlan);
    setShowPlans(false); // Ocultar la sección de planes después de seleccionar uno
  };

  return (
    <div className={`calculator-wrapper ${showPlans ? "show-plans" : ""}`}>
      <div className="container">
        <HeadCalculator />
        {/* Mostrar plan seleccionado */}
        {plan && (
          <div className="plan-indicator">
            ✓ Plan {plan} seleccionado
          </div>
        )}
        {/* Paso 3: Pasamos el valor actual a ScreenCalculator */}
        <ScreenCalculator numersInput={display} />
        {/* Paso 4: Pasamos la función handleInput a Buttons */}
        <Buttons onButtonClick={handleInput} />
      </div>
      
      {/* Sección de planes */}
      {showPlans && <PlansSection onSelectPlan={handleSelectPlan} />}
    </div>
  );
}

export default Calculator;
