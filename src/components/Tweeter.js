import React from "react"

export default class Tweeter extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    makeText() {

        return `${this.props.official}, three weeks from now, we could have ` +
        `${Math.floor(this.props.futureCases)} cases and ${Math.floor(this.props.futureDeaths)} deaths in ${this.props.state}. Will you be ready to act then? ` +
        `We need to take action TODAY we will be demanding three weeks from now. #FlattenTheCurve"`
    }
    render() {
        console.log('tweet')
        console.log(this.props)
        let text = this.makeText();

        return <div className="item">
            <a target="_blank" href={`https://twitter.com/intent/tweet?text=${text}`}>Tweet This</a>
            <br/>

            <textarea value={text}>
            </textarea>
        </div>
    }
}