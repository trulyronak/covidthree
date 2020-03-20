import React from "react"
import {Button, Form, Alert} from "react-bootstrap"

export default class Tweeter extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            textarea: this.makeText()
        }
    }

    handleChange(e) {
        this.setState({
            textarea: e.target.value
        })
    }

    makeText() {

        return `.${this.props.official} three weeks from now, we could have ${this.props.futureCases} cases and ${this.props.futureDeaths} deaths in ${this.props.state}. Will you be ready to act then? We need to take the action TODAY not wait till 3 weeks from now, when it will be too late. #FlattenTheCurve #ThreeWeeks
        
        ${window.location.href}`
    }
    render() {
        console.log('tweet')
        console.log(this.props)
        let text = this.makeText()
        return <div className="item">
            <Button variant="primary" target="_blank" href={`https://twitter.com/intent/tweet?text=${this.state.textarea}`}>Tweet This</Button><br/>
            <Alert variant="secondary">This is an example tweet. After clicking tweet, you can edit and confirm before sending. We will not make tweets without your permission.</Alert>
            <br/>

            <Form.Control as="textarea" rows="7" value={text} />
        </div>
    }
}