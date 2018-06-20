import React, { Component } from 'react';

import './App.css';
import Modal from './components/Container/Modal';
import Timer from './components/Presentational/Timer';
import Actions from './components/Presentational/Actions';

class App extends Component {
  state = {
    breakLength: 5,
    currentTime: 0,
    deadline: 0,
    minutes: 25,
    seconds: '00',
    isBreak: false,
    tally: 0,
    timeIntervalId: 0,
    workLength: 0,
  }

  audio = React.createRef()

  componentWillUnmount() {
    this.stop();
  }
  
  prepClock = () => {
    const { workLength, minutes } = this.state;

    this.setState({ 
      currentTime: new Date(),
      deadline: this.getDeadline(workLength), 
      workLength: minutes
    }, this.start);
  }
  
  start = () => {
    this.interval = setInterval(this.timeLeft, 1000);
  }

  stop = () => { 
    clearInterval(this.interval);
  }

  getDeadline = (length) => new Date(new Date().getTime() + (length * 60 * 1000));

  timeLeft = () => {
    const { isBreak, tally, deadline, workLength, breakLength } = this.state;
    const msLeft = Date.parse(deadline) - Date.parse(new Date());
    const minutesLeft = Math.floor(msLeft / 1000 / 60);
    const secondsLeft = msLeft / 1000 % 60;
    
    let newState = {
      minutes: ('0' + minutesLeft).slice(-2),
      seconds: ('0' + secondsLeft).slice(-2),
    }

    if (msLeft === 0) {
      this.stop();
      this.audio.current.play();

      newState = {
        ...newState,
        currentTime: new Date(),
        isBreak: !isBreak,
        tally: tally + 1, 
        deadline: this.getDeadline(isBreak ? breakLength : workLength), 
      };
    }

    this.setState(newState, this.start);
  }

  resetClock = () => {
    this.stop();
    this.setState({
      currentTime: 0,
      deadline: 0,
      minutes: this.state.workLength,
      seconds: '00',
    });
  }

  incTime = () => {
    this.setState({ minutes: this.state.minutes + 1 });
  }

  decrTime = () => {
    this.setState({ minutes: this.state.minutes - 1 });
  }

  render() {
    return (
      <div className="App">
        <Modal />

        <h3 className="title">Pomodoro Timer</h3>

        <Timer 
          minutes={this.state.minutes} 
          seconds={this.state.seconds}
          tally={this.state.tally} 
          incTime={this.incTime}
          decrTime={this.decrTime}
          status={this.state.status} 
        />

        <audio 
          src='https://s3.amazonaws.com/ask-soundlibrary/musical/amzn_sfx_bell_timer_01.mp3' 
          volume='0.5'
          ref={this.audio} 
        />

        <Actions 
          start={this.prepClock}
          reset={this.resetClock} 
        />
      </div>
    );
  }
}

export default App;

/** Bugs to fix:
 * Add PropTypes and Default Props
 * Decrement to -1
 * Pause functionality
 * Title
 * ComponentWillUnmount -> clearInterval
 * Getter functions. this.get.workLength
 * deconstruct this.state at top
 * Prettier config
 * set up ES lint
 * state isBreak: true/false
 */