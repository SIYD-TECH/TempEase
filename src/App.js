import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("c2f");
  const [display, setDisplay] = useState(0);

  function convertFromCelsiusToFarenheit(temp) {
    const result = temp * (9 / 5) + 32;
    setTemp("");
    // console.log(result);
    setDisplay(result);
  }

  function convertFromFahrenheitToCelsius(temp) {
    const result = ((temp - 32) * 5) / 9;
    setTemp("");
    setDisplay(result);
  }

  function convertFromCelsiusToKelvin(temp) {
    const result = temp + 273.15;
    setTemp("");
    setDisplay(result);
  }

  function convertFromKelvinToCelsius(temp) {
    const result = temp - 273.15;
    setTemp("");
    setDisplay(result);
  }

  function convertFromKelvinToFarrenheit(temp) {
   const result = (temp - 273.15) * (9 / 5) + 32;
    setTemp("");
    setDisplay(result);
  }

  function convertFromFarrenhreitToKelvin(temp) {
    const result = (temp - 32) * (5 / 9) + 273.15;
    setTemp("");
    setDisplay(result);
  }

  //

  // function convertFromKelvin(temp) {}

  function convertTemperature(e, temp, unit) {
    e.preventDefault();

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
    <div>
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
  return <div>Temp Ease</div>;
}

function Input({ temp, setTemp, unit, setUnit, onCalculate }) {
  return (
    <form
      onSubmit={(e) => {
        onCalculate(e, temp, unit);
      }}
    >
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button type="submit">Convert</button>
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="c2f">Celsius to Farrenheit </option>
        <option value="f2c">Farrenheit to Celsius </option>
        <option value="c2k">Celsius to Kelvin</option>
        <option value="k2c">Kelvin to Celsius</option>
        <option value="f2k">Farrenheit to Kelvin</option>
        <option value="k2f">Kelvin to Farrenheit</option>
      </select>
    </form>
  );
}

function Display({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
