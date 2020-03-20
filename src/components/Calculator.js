import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: 420,
            deaths: 13
        }
        this.calculate();
        this.handleCasesChange = this.handleCasesChange.bind(this);
        this.handleDeathsChange = this.handleDeathsChange.bind(this);
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

    render() {
        return <div className="item">
            <form>
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