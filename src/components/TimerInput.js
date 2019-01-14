import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default class TimerInput extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom>
                    Input your desired time
                </Typography>
                <TextField
                id="outlined-number"
                label="Minutes"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
                value={this.props.minutes}
                onChange={this.props.handleChange}
                required
                />
            </div>

        )
    }
}