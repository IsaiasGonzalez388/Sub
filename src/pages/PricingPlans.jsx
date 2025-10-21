import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./../css/PricingPlans.css";

const monthlyPlans = [
  { name: "Básico", price: "$9.99", features: ["1 pantalla", "Definición estándar"] },
  { name: "Estándar", price: "$15.99", features: ["2 pantallas", "Full HD"], popular: true },
  { name: "Premium", price: "$19.99", features: ["4 pantallas", "4K + HDR"] },
];

const yearlyPlans = [
  { name: "Básico", price: "$99.99", features: ["1 pantalla", "Definición estándar"] },
  { name: "Estándar", price: "$149.99", features: ["2 pantallas", "Full HD"], popular: true },
  { name: "Premium", price: "$199.99", features: ["4 pantallas", "4K + HDR"] },
];

export default function PlanSelector() {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = isMonthly ? monthlyPlans : yearlyPlans;

  return (
    <div className="plan-container">
      <h2 className="title">Elige tu Plan</h2>

      <div className="toggle-container">
        <button
          className={`toggle ${isMonthly ? "active" : ""}`}
          onClick={() => setIsMonthly(true)}
        >
          Mensual
        </button>
        <button
          className={`toggle ${!isMonthly ? "active" : ""}`}
          onClick={() => setIsMonthly(false)}
        >
          Anual
        </button>
      </div>

      <p className="description">
        Disfruta de películas, series y mucho más sin límites. Cancela cuando quieras.
      </p>

      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <span className="badge">Más Popular</span>}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price} <span>{isMonthly ? "/mes" : "/año"}</span></p>
            <button className="choose-btn">Elegir Plan</button>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}><TiTick /> {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="subscription-info">
        <p>Tu plan actual se renueva el 24 de Julio, 2024.</p>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <small>Quedan 15 días</small>
      </div>
    </div>
  );
}
