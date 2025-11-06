import { useState } from "react";
import "./App.css";

function App() {
  const [temp,setTemp] = useState("");
  const [unit,setUnit] = useState("c2f")
  const [display, setDisplay] = useState(0)

  function convertFromCelsius(value) {

    const result = temp * 2;
    setTemp("");
    // console.log(result);
    setDisplay(result);
  }

  // function convertTemperature(temp, unit , e) {
  //   e.preventDefault();
  //   if (scale === "Celsius") {
  //     convertFromCelsius(value);
  //   } else if (scale === "Fahrenheit") {
  //     convertFromFahrenheit(value);
  //   } else if (scale === "Kelvin") {
  //     convertFromKelvin(value);
  //   } else {
  //     console.log("Unknown unit");
  //   }
  // }
  
  return (
    <div>
      <Heading />
      <Display display={display}/>
      <Input temp={temp} setTemp={setTemp} unit={unit} setUnit = {setUnit} />
    </div>
  );
}

function Heading() {
  return <div>Temp Ease</div>;
}


function Input({temp , setTemp , unit , setUnit , onCalculate}) {
  return (
    <form onSubmit={(e) => onCalculate(e)}>
      <input type="number" value={temp} onChange={(e) => setTemp(e.target.value)}/>
      <button>Convert</button>
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="c2f">Celsius to Farrenheit </option>
        <option value="f2c">Farrenheit to Celsius </option>
        <option value="c2k">Celsius to Kelvin</option>
        <option value="f2k">Farrenheit to Kelvin</option>
      </select>
    </form>
  );
}

function Display({display}) {
  return <div>
    <p>{display}</p>
  </div>;
}

export default App;
