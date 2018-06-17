import React, { Component } from 'react';

import './App.css';
import Modal from './components/Container/Modal';
import Timer from './components/Presentational/Timer';
import Actions from './components/Presentational/Actions';

class App extends Component {
  state = {
    currentTime: 0,
    deadline: 0,
    minutes: 25,
    seconds: '00',
    timeIntervalId: 0,
  }

  startClock = () => {
    this.setDeadLine();
    const timeInterval = setInterval(this.timeLeft, 1000);
    this.setState({ timeIntervalId: timeInterval })
  }

  setDeadLine = () => {
    const currentTime = new Date();
    const deadline = new Date(new Date().getTime() + 
    (this.state.minutes * 60 * 1000));
    this.setState({ 
      currentTime: currentTime,
      deadline: deadline,
     });
  }

  timeLeft = () => {
    const msLeft = Date.parse(this.state.deadline) - Date.parse(new Date);
    const minutesLeft = Math.floor(msLeft / 1000 / 60);
    const secondsLeft = msLeft / 1000 % 60;
    if (msLeft === 0) {
      clearInterval(this.state.timeIntervalId);
      const audio = this.audio;
      audio.play();
    };
    this.setState({
      minutes: ('0' + minutesLeft).slice(-2),
      seconds: ('0' + secondsLeft).slice(-2),
    });
  }

  incTime = () => {
    this.setState({ minutes: this.state.minutes + 1 });
  }

  decrTime = () => {
    this.setState({ minutes: this.state.minutes - 1 });
  }

  resetClock = () => {
    clearInterval(this.state.timeIntervalId);
    this.setState({
      currentTime: 0,
      deadline: 0,
      minutes: 25,
      seconds: '00',
      timeIntervalId: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <Modal />
        <h3 className="title">Pomodoro Timer</h3>
        <Timer 
        minutes={this.state.minutes} 
        seconds={this.state.seconds} 
        incTime={this.incTime}
        decrTime={this.decrTime} />
        <audio 
        src='https://s3.amazonaws.com/ask-soundlibrary/musical/amzn_sfx_bell_timer_01.mp3' 
        volume='0.5'
        ref={node => this.audio = node}/>
        <Actions 
        start={this.startClock}
        reset={this.resetClock} />
      </div>
    );
  }
}

export default App;

/** Bugs to fix:
 * Decrement to -1
 * Add PropTypes and Default Props
 */