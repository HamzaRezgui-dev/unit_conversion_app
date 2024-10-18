import React, { useState } from "react";
import { convertWeight } from "../../service/conversionservice";
import "../pages.css";

const WeightConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kilogram");
  const [toUnit, setToUnit] = useState("gram");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value < 0) {
      alert("Please enter a non-negative value.");
      return;
    }
    const response = await convertWeight(value, fromUnit, toUnit);
    setResult(response);
  };

  const resetForm = () => {
    setValue("");
    setFromUnit("kilogram");
    setToUnit("gram");
    setResult(null);
  };

  const getPluralUnit = (unit, result) => {
    return result > 1 ? `${unit}s` : unit;
  };

  return (
    <div className="container">
      <h2>Weight Converter</h2>
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
            <option value="milligram">Milligram</option>
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="ounce">Ounce</option>
            <option value="pound">Pound</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="milligram">Milligram</option>
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="ounce">Ounce</option>
            <option value="pound">Pound</option>
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

export default WeightConverter;
