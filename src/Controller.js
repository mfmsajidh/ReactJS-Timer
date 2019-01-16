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
            alertIsOpen: false
        };

        this.handleChange=this.handleChange.bind(this);
        this.startCountdown=this.startCountdown.bind(this);
        this.tick=this.tick.bind(this);
        this.clearValue=this.clearValue.bind(this)
        this.handleAlertClose=this.handleAlertClose.bind(this)
    }

    // ------------ Functions for Countdown ------------
    handleChange(event) {
        console.log('Event ID:',event.target.id);
        console.log('Event Value:',event.target.value);

        let eventId = event.target.id;
        let eventValue = event.target.value;

        if(eventId==="minutes"){
            if (eventValue>=60 || eventValue<0 || eventValue % 1 != 0 || isNaN(eventValue)) {
                let hours = Math.floor(eventValue / 60);
                console.log('Hours:', hours);
                this.setState({
                    alertIsOpen: true
                })
            }
            else{
                this.setState({
                    minutes: eventValue
                })
            }
        }
    }

    startCountdown(){
        this.intervalHandle = setInterval(this.tick,100);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
        this.setState({
            isClicked: true
        })

    }

    tick(){
        let min = Math.floor(this.secondsRemaining / 60);
        let sec = this.secondsRemaining - (min * 60);

        this.setState({
            minutes: min,
            seconds: sec
        });

        // ------------ To be checked later
        // if (sec<10) {
        //     this.setState({
        //         seconds: "0" + this.state.seconds
        //     })
        // }
        //
        // if (min<10) {
        //     this.setState({
        //         minutes: "0" + min
        //     })
        // }

        if (min===0 && sec===0) {
            clearInterval(this.intervalHandle);
            this.setState({
                isClicked: false
            })
        }

        this.secondsRemaining--
    }

    clearValue(){
        this.setState({
            minutes: ''
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
                    <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <TimerInput minutes={this.state.minutes} handleChange={this.handleChange}/>
                    <StartButton startCountdown={this.startCountdown} minutes={this.state.minutes}/>
                    <ClearButton clearValue={this.clearValue} minutes={this.state.minutes}/>
                    <AlertDialog open={this.state.alertIsOpen} handleAlertClose={this.handleAlertClose}/>
                </div>
            )
        }

    }
}