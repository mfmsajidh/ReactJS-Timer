import React, {Component} from 'react';

import TimerInput from "./components/TimerInput";
import Timer from "./components/Timer";
import StartButton from './components/StartButton'
import ClearButton from "./components/ClearButton";
import AlertDialog from "./components/AlertDialog";

export default class Controller extends Component {

    constructor(props){
        super(props);
        this.state = {
            hours: '',
            minutes : '',
            seconds : '',
            isClicked : false,
            alertIsOpen: false,
            alertEventId: ''
        };

        this.handleChange=this.handleChange.bind(this);
        this.startCountdown=this.startCountdown.bind(this);
        this.tick=this.tick.bind(this);
        this.clearValue=this.clearValue.bind(this);
        this.handleAlertClose=this.handleAlertClose.bind(this);
    }

    // ------------ Functions for Countdown ------------
    handleChange(event) {
        let eventId = event.target.id;
        let eventValue = event.target.value;

        console.log('Event ID:',eventId);
        console.log('Event Value:',eventValue);

        if(eventId==="minutes"){
            if (eventValue>=60 || eventValue<0 || eventValue % 1 !== 0) {
                this.setState({
                    alertIsOpen: true,
                    alertEventId: eventId
                })
            }
            else{
                this.setState({
                    minutes: eventValue
                })
            }
        }
        else if (eventId==="seconds") {
            if (eventValue>=60 || eventValue<0 || eventValue % 1 !== 0) {
                this.setState({
                    alertIsOpen: true,
                    alertEventId: eventId
                })
            }
            else{
                this.setState({
                    seconds: eventValue
                })
            }
        }
        else {
            if (eventValue<0 || eventValue % 1 !== 0) {
                this.setState({
                    alertIsOpen: true,
                    alertEventId: eventId
                })
            }
            else{
                this.setState({
                    hours: eventValue
                })
            }
        }
    }

    startCountdown(){
        this.intervalHandle = setInterval(this.tick,100); //Timeout set to 100 milliseconds for easy testing, Default 1000
        if(this.state.hours){
            let time = parseInt(this.state.hours) * 3600;
            if(this.state.minutes){
                time += parseInt(this.state.minutes)*60;
                if(this.state.seconds){
                    this.secondsRemaining = time + parseInt(this.state.seconds);
                }
                else {
                    this.secondsRemaining = time
                }
            }
            else if (this.state.seconds){
                this.secondsRemaining = time + parseInt(this.state.seconds);
            }
            else {
                this.secondsRemaining = time
            }
        }
        else if(this.state.minutes){
            let time = parseInt(this.state.minutes);
            if (this.state.seconds) {
                this.secondsRemaining = (time * 60) + parseInt(this.state.seconds);
            }
            else {
                this.secondsRemaining = time * 60
            }
        }
        else {
            this.secondsRemaining = this.state.seconds
        }

        this.setState({
            isClicked: true
        })

    }

    tick(){
        let hrs = Math.floor(this.secondsRemaining / 60 / 60);
        let min = Math.floor(this.secondsRemaining / 60) % 60;
        let sec = this.secondsRemaining % 60;

        console.log('min:',min);
        console.log('min * 60:',min * 60);
        console.log('this.secondsRemaining:',this.secondsRemaining);
        console.log('this.secondsRemaining - (min * 60):',this.secondsRemaining - (min * 60));
        console.log('Sec:',sec);

        this.setState({
            hours: hrs,
            minutes: min,
            seconds: sec
        });

        if(this.state.hours){
            if (hrs<10) {
                this.setState({
                    hours: "0" + hrs
                })
            }
        }

        if(this.state.minutes){
            if (min<10) {
                this.setState({
                    minutes: "0" + min
                })
            }
        }

        if (sec<10) {
            this.setState({
                seconds: "0" + sec
            })
        }

        if (hrs===0 && min===0 && sec===0) {
            clearInterval(this.intervalHandle);
            this.setState({
                hours: '',
                minutes: '',
                seconds: '',
                isClicked: false
            })
        }

        this.secondsRemaining--
    }

    clearValue(){
        this.setState({
            hours: '',
            minutes: '',
            seconds: ''
        })
    }

    // ------------ Functions for Alert ------------
    handleAlertClose () {
        this.setState({
            alertIsOpen: false
        })
    }

    render() {
        if (this.state.isClicked) {
            return(
                <div>
                    <Timer
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                    />
                </div>
            )
        }
        else {
            return(
                <div>
                    <TimerInput
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        handleChange={this.handleChange}
                    />

                    <StartButton
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        startCountdown={this.startCountdown}
                    />

                    <ClearButton
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        clearValue={this.clearValue}
                    />

                    <AlertDialog
                        open={this.state.alertIsOpen}
                        alertEventId={this.state.alertEventId}
                        handleAlertClose={this.handleAlertClose}
                    />
                </div>
            )
        }

    }
}