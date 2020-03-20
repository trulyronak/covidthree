import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./components/Calculator"
import Tweeter from "./components/Tweeter"
import {Alert} from "react-bootstrap"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.text = ""
    this.state.futureDeaths = 0
    this.state.futureCases = 0
    this.state.state = "GA"
    this.state.official = "@GovKemp"
  }

  render() {
    console.log("update!")
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            COVID-19 - <code>3 Weeks From Now</code> 
          </p>
          Enter in your information below to see what might happen
        </header>
        <div className="container">
          <Calculator parent={this} />
          <Tweeter official={this.state.official} futureCases={this.state.futureCases} futureDeaths={this.state.futureDeaths} state={this.state.state} />
        </div>
        <Alert variant="primary">
        Note that this is intended as a rough estimate of the consequences of doing nothing, not an expert forecast. There are many reasons that our numbers could be incorrect, including the data itself -- many cases are going undetected right now, which means the total cases reported are too low and the death rate may be overestimated. Calculations are based on a five day doubling time and a 1.3% average population death rate for the US.
      </Alert>
      </div>
    );
  }
}

export default App;
