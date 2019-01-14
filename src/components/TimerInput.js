import React, {Component} from 'react'

export default class TimerInput extends Component {
    render() {
        return (
            <div style={{marginLeft:100}}>
                <h3>Keep calm and input your desired time</h3>
                <input type="number" value={this.props.minutes} onChange={this.props.handleChange} required/>
            </div>
        )
    }
}