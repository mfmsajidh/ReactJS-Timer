import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

export default class ClearButton extends Component {
    render(){
        return(
            <Button variant="outlined" color="secondary" disabled={!this.props.minutes} onClick={this.props.clearValue}>Clear</Button>
        )
    }
}