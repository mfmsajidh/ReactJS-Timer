import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

export default class StartButton extends Component {
    render(){
        return(
            <div>
                <Button variant="outlined" color="primary" disabled={!this.props.minutes} onClick={this.props.startCountdown}>Start</Button>
            </div>
        )
    }
}