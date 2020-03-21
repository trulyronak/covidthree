import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./components/Calculator"
import Tweeter from "./components/Tweeter"
import {Alert, Button, Container,Row, Col} from "react-bootstrap"
import Papa from 'papaparse';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.text = ""
    this.state.futureDeaths = 0
    this.state.futureCases = 0
    this.state.state = "the United States"
    this.state.official = "@realDonaldTrump"
    this.state.statesData = []
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
      this.getCSVData();
  }

  async fetchCSV() {
      return fetch("https://docs.google.com/spreadsheets/d/1FmDsmAq3fX9K2BAsfh6EibpnRxhV-DNvMSlX_fiLHOc/export?format=csv&id=1FmDsmAq3fX9K2BAsfh6EibpnRxhV-DNvMSlX_fiLHOc&gid=0").then(function (response) {
          let reader = response.body.getReader();
          let decoder = new TextDecoder('utf-8');

          return reader.read().then(function (result) {
              return decoder.decode(result.value);
          });
      });
  }

  getData(result) {
    let data = result.data
    data.pop()
    data.pop()
    data.pop()
    data.pop()

      this.setState({statesData: data});
  }

  async getCSVData() {
      let csvData = await this.fetchCSV();

      Papa.parse(csvData, {
          header: true,
          complete: this.getData
      });
  }



  render() {
    console.log("update!")
    console.log(this.state)
    console.log(this.state.statesData)

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            COVID-19 - <code>3 Weeks From Now</code> 
          </h1>
          <h3>Enter in your information below to see what might happen</h3>
        </header>
        Experts say that it could take up to the three weeks before we see the effects of our actions in reducing hospitalizations and deaths. We're worried that our elected officials aren't thinking ahead.
<br/>
      <Button variant="success" href="https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf">Imperial College Paper</Button>
      <Button variant="warning" href="https://docs.google.com/spreadsheets/d/1FmDsmAq3fX9K2BAsfh6EibpnRxhV-DNvMSlX_fiLHOc/">Data Sheet</Button>
        <Container>
          <Row>
          <Col xs={12} md={5}>
            <Calculator parent={this} statesData={this.state.statesData} />
          </Col>
          <Col>
            <Tweeter official={this.state.official} futureCases={this.state.futureCases} futureDeaths={this.state.futureDeaths} state={this.state.state} />
          </Col>
          </Row>
        </Container>
        <Alert variant="primary">
        Note that this is intended as a rough estimate of the consequences of doing nothing, not an expert forecast. There are many reasons that our numbers could be incorrect, including the data itself -- many cases are going undetected right now, which means the total cases reported are too low and the death rate may be overestimated. Calculations are based on a five day doubling time and a 1.3% average population death rate for the US.
      </Alert>
      <Alert variant="dark" className="footer">
        Made with ❤️ by <a href="https://twitter.com/realronakshah">Ronak Shah</a>, <a href="https://twitter.com/diddykrish">Aditya Krishnaswamy</a>, and <a href="https://twitter.com/Malar0ne">Mallory Harris</a>.
      </Alert>
      
      </div>
    );
  }
}

export default App;
