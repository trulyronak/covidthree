import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./components/Calculator"
import Tweeter from "./components/Tweeter"


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
      </div>
    );
  }
}

export default App;
