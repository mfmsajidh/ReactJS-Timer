import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default class TimerInput extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom>
                    Enter your desired time
                </Typography>

                <TextField
                    id="hours"
                    label="Hours"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                    value={this.props.hours}
                    onChange={this.props.handleChange}
                />

                <TextField
                id="minutes"
                label="Minutes"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
                value={this.props.minutes}
                onChange={this.props.handleChange}
                />

                <TextField
                    id="seconds"
                    label="Seconds"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                    value={this.props.seconds}
                    onChange={this.props.handleChange}
                />
            </div>

        )
    }
}