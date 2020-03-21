import React from 'react';
import {Form, Dropdown, DropdownButton} from "react-bootstrap";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: 17038,
            deaths: 220,
            statesData: []
        }
        this.calculate();
        this.handleCasesChange = this.handleCasesChange.bind(this);
        this.handleDeathsChange = this.handleDeathsChange.bind(this);
        this.handleStateSelect = this.handleStateSelect.bind(this);
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
            deaths: state.Deaths
        })
        this.props.parent.setState({
            state: state.State,
            official: state["Twitter Handle"]
        })
        this.calculate(state.Cases, state.Deaths);
    }

    render() {
        return <div className="item">
            <form>
                <label>
                    Select a State for PreFilled Data<br/>
                <select id="state" onChange={this.handleStateSelect}>
                    {this.props.statesData.map((state, index) => {
                        return <option value={index} key={index}>{state["State"]}</option>
                    })}   
                </select>
                </label>
                <br/>
            <label>
                Cases Right Now:
                <input type="number" name="name" value={this.state.cases} onChange={this.handleCasesChange} />
            </label><br/>
            <label>
                Deaths Right Now:
                <input type="number" name="name" value={this.state.deaths} onChange={this.handleDeathsChange} />
            </label>
            <br/>
                </form>
        </div>
    }
}