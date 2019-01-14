import React, {Component} from 'react'

export default class StartButtonUI extends Component {
    render(){
        return(
            <div style={{marginLeft:130}}>
                <button disabled={!this.props.value} onClick={this.props.startCountdown}>Start</button>
            </div>
        )
    }
}