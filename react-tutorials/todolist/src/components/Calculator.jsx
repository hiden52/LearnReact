import React from "react";

// Single of source of truth
// very very very very important!

function BoilingVerdict(props) {
  if (props.celsius >= 100) return <p>The water would boil.</p>;
  return <p>The warter would not boil</p>;
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (isNaN(input)) return null;

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// Extract component rener input
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: props.temperature || '', scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }
  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}
// class Calculator extends React.Component {

//     render() {
//         const temperature = this.state.temperature;

//         return (
//             <fieldset>
//                 <legend>Enter temperature in Celsius:</legend>
//                 <input
//                     value={temperature}
//                     onChange={this.handleChange}
//                 />
//                 <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
//             </fieldset>
//         );
//     }
//}

export default Calculator;
