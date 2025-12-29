function PlansSection({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) {
  return (
    <div className="plans-section">
      <h2>Selecciona tu Plan</h2>
      
      <div className="plans-container">
        {/* Plan Premium */}
        <div className="plan-card premium">
          <div className="plan-header">
            <h3>Premium</h3>
            <p className="price">$9.99</p>
            <p className="frequency">/mes</p>
          </div>
          
          <ul className="features">
            <li>✓ Cálculos ilimitados</li>
            <li>✓ Historial de operaciones</li>
            <li>✓ Conversión de unidades</li>
            <li>✓ Soporte por email</li>
          </ul>
          
          <button className="btn-plan" onClick={() => onSelectPlan("Premium")}>Seleccionar Plan</button>
        </div>

        {/* Plan Extra Premium */}
        <div className="plan-card extra-premium">
          <div className="plan-header">
            <h3>Extra Premium</h3>
            <span className="badge">Más Popular</span>
            <p className="price">$19.999</p>
            <p className="frequency">/año</p>
          </div>
          
          <ul className="features">
            <li>✓ Cálculos ilimitados</li>
            <li>✓ Historial completo</li>
            <li>✓ Conversión de unidades</li>
            <li>✓ Soporte prioritario 24/7</li>
            <li>✓ Gráficos avanzados</li>
            <li>✓ Análisis estadísticos</li>
          </ul>
          
          <button className="btn-plan extra" onClick={() => onSelectPlan("Extra Premium")}>Seleccionar Plan</button>
        </div>
      </div>
    </div>
  );
}

export default PlansSection;
