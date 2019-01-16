import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography";

export default class Timer extends Component {
    render(){
        return (
            <div>
                <Typography variant="h2" gutterBottom>
                    {this.props.hours}:{this.props.minutes}:{this.props.seconds}
                </Typography>
            </div>
        )
    }
}