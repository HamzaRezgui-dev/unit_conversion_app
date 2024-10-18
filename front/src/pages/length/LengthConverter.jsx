import React, { useState } from "react";
import { convertLength } from "../../service/conversionservice";
import "../pages.css";

const LengthConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value < 0) {
      alert("Please enter a non-negative value.");
      return;
    }
    const response = await convertLength(value, fromUnit, toUnit);
    setResult(response);
  };

  const resetForm = () => {
    setValue("");
    setFromUnit("meter");
    setToUnit("kilometer");
    setResult(null);
  };

  const getPluralUnit = (unit, result) => {
    return result > 1 ? `${unit}s` : unit;
  };

  return (
    <div className="container">
      <h2>Length Converter</h2>
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
            <option value="millimeter">Millimeter</option>
            <option value="centimeter">Centimeter</option>
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="inch">Inch</option>
            <option value="foot">Foot</option>
            <option value="yard">Yard</option>
            <option value="mile">Mile</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="millimeter">Millimeter</option>
            <option value="centimeter">Centimeter</option>
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="inch">Inch</option>
            <option value="foot">Foot</option>
            <option value="yard">Yard</option>
            <option value="mile">Mile</option>
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

export default LengthConverter;
