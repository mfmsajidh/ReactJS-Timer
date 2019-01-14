import React, {Component} from 'react'

import TimerInput from "./components/TimerInput";
import Timer from "./components/Timer";
import StartButton from './components/StartButton'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            seconds : '00',
            minutes : '',
            isClicked : false
        };

        this.handleChange=this.handleChange.bind(this);
        this.startCountdown=this.startCountdown.bind(this);
        this.tick=this.tick.bind(this);
    }

    handleChange(event) {
        this.setState({
            minutes: event.target.value
        })
    }

    tick(){
        let min = Math.floor(this.secondsRemaining / 60);
        let sec = this.secondsRemaining - (min * 60);

        this.setState({
            minutes: min,
            seconds: sec
        })

        if (sec<10) {
            this.setState({
                seconds: "0" + this.state.seconds
            })
        }

        if (min<10) {
            this.setState({
                minutes: "0" + min
            })
        }

        if (min===0 && sec===0) {
            clearInterval(this.intervalHandle);
        }

        this.secondsRemaining--
    }

    startCountdown(){
        this.intervalHandle = setInterval(this.tick,1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
        this.setState({
            isClicked: true
        })

    }

    render() {

        const clicked = this.state.isClicked;

        if (clicked) {
            return(
                <div>
                    <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <TimerInput minutes={this.state.minutes} handleChange={this.handleChange}/>
                    <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                    <StartButton startCountdown={this.startCountdown} minutes={this.state.minutes}/>
                </div>
            )
        }

    }
}