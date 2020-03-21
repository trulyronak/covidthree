import React from 'react';
import {Form, Dropdown, DropdownButton} from "react-bootstrap";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: 17038,
            deaths: 220,
            statesData: [],
        }
        this.calculate();
        this.handleCasesChange = this.handleCasesChange.bind(this);
        this.handleDeathsChange = this.handleDeathsChange.bind(this);
        this.handleStateSelect = this.handleStateSelect.bind(this);
        this.handleOfficialChange = this.handleOfficialChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.state.official = this.props.parent.state.official
        this.state.state = this.props.parent.state.state
    }

    handleCasesChange(e) {
        this.setState({
            cases: e.target.value
        })
        this.calculate(e.target.value)
    }

    handleDeathsChange(e) {
        this.setState({
            deaths: e.target.value
        })
        this.calculate(null, e.target.value)
    }

    calculate(cases, deaths) {
        cases = cases || this.state.cases
        deaths = deaths || this.state.deaths
        this.props.parent.setState({
            futureCases: this.roundToNearestTenth(cases * Math.pow(2, (21/5)))
        })

        this.props.parent.setState({
            futureDeaths: this.roundToNearestTenth(deaths * Math.pow(2, (21/5)))
        })
    }

    roundToNearestTenth(n) {
        return Math.ceil((n+1)/10)*10;
    }

    handleStateSelect(e) {
        let state = this.props.statesData[e.target.value]
        this.setState({
            cases: state.Cases,
            deaths: state.Deaths,
        })
        this.props.parent.setState({
            state: state.State,
            official: state["Twitter Handle"]
        })
        this.calculate(state.Cases, state.Deaths);
    }

    handleOfficialChange(e) {
        this.props.parent.setState({
            official: e.target.value
        })
        this.setState({
            official: e.target.value
        })
    }

    handleLocationChange(e) {
        this.props.parent.setState({
            state: e.target.value
        })
        this.setState({
            state: e.target.value
        })
    }

    render() {
        return <div className="item">
            <h3>Plug in your Area’s Data</h3>
            {/* <p>Choose a State for Prefilled Data</p> */}
            <form>
                <label>
                   State:<br/>
                <select id="state" onChange={this.handleStateSelect}>
                    {this.props.statesData.map((state, index) => {
                        return <option value={index} key={index}>{state["State"]}</option>
                    })}   
                </select>
                </label>
                <br/>
            <label>
                Cases Right Now  <br/>
                <input type="number" name="name" value={this.state.cases} onChange={this.handleCasesChange} />
            </label><br/>
            <label>
                Deaths Right Now  <br/>
                <input type="number" name="name" value={this.state.deaths} onChange={this.handleDeathsChange} />
            </label>
<br/>
            <label>
                Who to Tag  <br/>
                <input type="text" name="name" value={this.state.official} onChange={this.handleOfficialChange} />
            </label>
<br/>
            <label>
                Location  <br/>
                <input type="text" name="name" value={this.state.state} onChange={this.handleLocationChange} />
            </label>

            
            <br/>
                </form>

                In three weeks...
                <br></br>
                {this.props.parent.state.futureCases} Cases<br/>
                {this.props.parent.state.futureDeaths} Deaths
        </div>
    }
}