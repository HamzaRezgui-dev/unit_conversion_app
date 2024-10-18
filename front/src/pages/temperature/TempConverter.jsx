import React, { useState } from "react";
import { convertTemp } from "../../service/conversionservice";
import "../pages.css";

const TempConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await convertTemp(value, fromUnit, toUnit);
    setResult(response);
  };

  const resetForm = () => {
    setValue("");
    setFromUnit("celsius");
    setToUnit("fahrenheit");
    setResult(null);
  };

  const getPluralUnit = (unit, result) => {
    return result > 1 ? `${unit}s` : unit;
  };

  return (
    <div className="container">
      <h2>Temperature Converter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Value:</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <div>
          <label>From:</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          </select>
        </div>
        <button type="submit">Convert</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
      {result !== null && (
        <p>
          Result: {result} {getPluralUnit(toUnit, result)}
        </p>
      )}
    </div>
  );
};

export default TempConverter;
