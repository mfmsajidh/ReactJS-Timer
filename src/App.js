import React, {Component} from 'react'
import Typography from "@material-ui/core/es/Typography/Typography";
import Controller from "./Controller";

export default class App extends Component {
    render() {
        return (
            <Typography>
                <Controller/>
            </Typography>
        )
    }
}