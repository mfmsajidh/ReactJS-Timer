import React, {Component} from 'react'
// import Typography from "@material-ui/core/Typography";

export default class Timer extends Component {
    render(){

        // let timer;
        let hours;
        let hoursSpan;

        let minutes;
        let minutesSpan = "MINUTES";

        let secondsSpan = "SECONDS";


        // if (this.props.hours) {
        //     if (this.props.minutes<10) {
        //         timer =  (this.props.hours + " : 0" + this.props.minutes + " : " + this.props.seconds)
        //     }
        //     else {
        //         timer =  (this.props.hours + " : " + this.props.minutes + " : " + this.props.seconds)
        //     }
        // }
        // else if (this.props.minutes) {
        //     if (this.props.minutes<10) {
        //         timer = ("0" + this.props.minutes + " : " + this.props.seconds)
        //     }
        //     else {
        //         timer = (this.props.minutes + " : " + this.props.seconds)
        //     }
        // }
        // else {
        //     timer = ("Only " + this.props.seconds + " seconds remaining")
        // }

        if(this.props.hours){
            hours = this.props.hours;
            hoursSpan = "HOURS"
        }
        else {
            hours = "";
            hoursSpan = "";
        }

        if(this.props.minutes<10){
            minutes = "0"+this.props.minutes;
            if(this.props.minutes<=1){
                minutesSpan = "MINUTE"
            }
        }
        else{
            minutes = this.props.minutes;
        }

        if(this.props.seconds<=1){
            secondsSpan = "SECOND";
        }

        return (
            <div>

                <video autoPlay muted loop id="myVideo">
                    <source src="/video/Render.mp4" type="video/mp4"/>
                </video>



                <section id="home" className="home-particles">
                    <div className="shadow-overlay"/>
                    <div className="content-wrap-table">
                    </div>
                </section>


                <div className="main-content-tablecell">
                    <div className="row">
                        <div className="col-twelve">
                            <div id="counter">
                                <div className="half">
                                    <span>{hours} <sup>{hoursSpan}</sup></span>
                                </div>
                                <div className="half">
                                    <span>{minutes} <sup>{minutesSpan}</sup></span>
                                    <span>{this.props.seconds} <sup>{secondsSpan}</sup></span>
                                </div>
                            </div>
                            <div className="bottom-text">
                                <h1>Happy Hacking !!!!</h1>
                                <p>This is your time to inspire and be inspired. Don't forget to get the
                                    maximum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}