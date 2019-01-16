import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography";

export default class Timer extends Component {
    render(){

        let timer

        if (this.props.minutes) {
            timer = (this.props.minutes+":"+this.props.seconds)
        }
        else {
            timer = (this.props.seconds)
        }
        return (
            <div>
                <Typography variant="h2" gutterBottom>
                    {timer}
                </Typography>
            </div>
        )
    }
}