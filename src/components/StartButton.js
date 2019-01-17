import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

export default class StartButton extends Component {
    render(){
        return(
            <Button
                variant="outlined"
                color="primary"
                disabled={!this.props.minutes && !this.props.seconds && !this.props.hours}
                onClick={this.props.startCountdown}
            >Start</Button>
        )
    }
}