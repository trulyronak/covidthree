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

    getWebsiteURL() {
        const url = window.location.href;
        return url.split(/[?#]/)[0];
    }
    
    makeText() {
        // return `.${this.props.official} three weeks from now, ${this.props.state} could have:\n\n${this.props.futureCases} of \#COVID19\n${this.props.futureDeaths} deaths\n\nWill You Be Ready to Act Then?\n\n#FlattenTheCurve\#ThreeWeeks`
        return `.${this.props.official} three weeks from now, we could have ${this.props.futureCases} cases and ${this.props.futureDeaths} deaths in ${this.props.state}. Will you be ready to act then? We can’t wait till 3 weeks from now. See how this was calculated at ${this.getWebsiteURL()} #FlattenTheCurve #ThreeWeeks `
    }
    render() {
        console.log('tweet')
        console.log(this.props)
        let text = this.makeText()
        return <div className="item">
                        <h3>Take Action</h3>

            <Button variant="primary" target="_blank" onClick={() => {
                let href = `https://twitter.com/intent/tweet?hashtags=FlattenTheCurve%20%23ThreeWeeksBehind&text=${text}`
                window.open(href, "_blank")
            }}>Tweet This</Button><br/>
            <br/>

            <Form.Control as="textarea" rows="7" value={text} />
        This is an example tweet. After clicking tweet, you can edit and confirm before sending. We will not make tweets without your permission.
        </div>
    }
}