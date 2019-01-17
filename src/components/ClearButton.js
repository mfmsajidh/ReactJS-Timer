import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

export default class ClearButton extends Component {
    render(){
        return(
            <Button
                variant="outlined"
                color="secondary"
                disabled={!this.props.minutes && !this.props.seconds && !this.props.hours}
                onClick={this.props.clearValue}
            >Clear</Button>
        )
    }
}