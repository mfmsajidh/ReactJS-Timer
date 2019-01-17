import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography";

export default class Timer extends Component {
    render(){

        let timer;

        if (this.props.hours) {
           timer =  (this.props.hours + " : " + this.props.minutes + " : " + this.props.seconds)
        }
        else if (this.props.minutes) {
            timer = (this.props.minutes + " : " + this.props.seconds)
        }
        else {
            timer = ("Only " + this.props.seconds + " seconds remaining")
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