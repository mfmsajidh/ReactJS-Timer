import React, {Component} from 'react'

export default class StartButtonUI extends Component {
    render(){
        return(
            <div style={{marginLeft:130}}>
                <button disabled={!this.props.minutes} onClick={this.props.startCountdown}>Start</button>
            </div>
        )
    }
}