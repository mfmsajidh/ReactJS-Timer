import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography";

export default class Timer extends Component {
    render(){

        let timer;

        if (this.props.hours) {
            if (this.props.minutes<10) {
                timer =  (this.props.hours + " : 0" + this.props.minutes + " : " + this.props.seconds)
            }
            else {
                timer =  (this.props.hours + " : " + this.props.minutes + " : " + this.props.seconds)
            }
        }
        else if (this.props.minutes) {
            if (this.props.minutes<10) {
                timer = ("0" + this.props.minutes + " : " + this.props.seconds)
            }
            else {
                timer = (this.props.minutes + " : " + this.props.seconds)
            }
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