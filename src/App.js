import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("c2f");
  const [display, setDisplay] = useState(0);

  function convertFromCelsiusToFarenheit(temp) {
    const result = temp * (9 / 5) + 32;
    setTemp("");
    setDisplay(result.toFixed(2) + "F");
  }

  function convertFromFahrenheitToCelsius(temp) {
    const result = ((temp - 32) * 5) / 9;
    setTemp("");
    setDisplay(result.toFixed(2) + "°C");
  }

  function convertFromCelsiusToKelvin(temp) {
    const result = temp + 273.15;
    setTemp("");
    setDisplay(result.toFixed(2) + "K");
  }

  function convertFromKelvinToCelsius(temp) {
    const result = temp - 273.15;
    setTemp("");
    setDisplay(result.toFixed(2) + "°C");
  }

  function convertFromKelvinToFarrenheit(temp) {
    const result = (temp - 273.15) * (9 / 5) + 32;
    setTemp("");
    setDisplay(result.toFixed(2) + "F");
  }

  function convertFromFarrenhreitToKelvin(temp) {
    const result = (temp - 32) * (5 / 9) + 273.15;
    setTemp("");
    setDisplay(result.toFixed(2) + "K");
  }

  function convertTemperature(e, temp, unit) {
    e.preventDefault();

    if(!temp) return alert("Please enter a Number");
    if (unit === "c2f") {
      convertFromCelsiusToFarenheit(temp);
    } else if (unit === "f2c") {
      convertFromFahrenheitToCelsius(temp);
    } else if (unit === "k2c") {
      convertFromKelvinToCelsius(temp);
    } else if (unit === "c2k") {
      convertFromCelsiusToKelvin(temp);
    } else if (unit === "k2f") {
      convertFromKelvinToFarrenheit(temp);
    } else if (unit === "f2k") {
      convertFromFarrenhreitToKelvin(temp);
    }
  }

  return (
    <div className="app-container">
      <Heading />
      <Display display={display} />
      <Input
        temp={temp}
        setTemp={setTemp}
        unit={unit}
        setUnit={setUnit}
        onCalculate={convertTemperature}
      />
    </div>
  );
}

function Heading() {
  return <h1 className="app-heading">TempEase 🌡️</h1>;
}

function Input({ temp, setTemp, unit, setUnit, onCalculate }) {
  return (
    <form
      onSubmit={(e) => {
        onCalculate(e, temp, unit);
      }}
      className="converter-form"
    >
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter temperature"
        className="temp-input"
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="unit-select"
      >
        <option value="c2f">Celsius to Fahrenheit</option>
        <option value="f2c">Fahrenheit to Celsius</option>
        <option value="c2k">Celsius to Kelvin</option>
        <option value="k2c">Kelvin to Celsius</option>
        <option value="f2k">Fahrenheit to Kelvin</option>
        <option value="k2f">Kelvin to Fahrenheit</option>
      </select>

      <button type="submit" className="convert-btn">
        Convert
      </button>
    </form>
  );
}

function Display({ display }) {
  return (
    <div className="display-container">
      <p className="display-result">{display}</p>
    </div>
  );
}

export default App;
