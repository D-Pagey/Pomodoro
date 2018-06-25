import React, { Component } from 'react';

import './App.css';
import Modal from './components/Container/Modal';
import Timer from './components/Presentational/Timer';
import Actions from './components/Presentational/Actions';
import Footer from './components/Presentational/Footer';

class App extends Component {
  state = {
    breakLength: 5,
    currentTime: 0,
    deadline: 0,
    minutes: 25,
    seconds: '00',
    isBreak: false,
    tally: 0,
    workLength: 0,
  }

  audio = React.createRef()

  componentWillUnmount() {
    this.stop();
  }
  
  prepClock = () => {
    const { minutes } = this.state;

    this.setState({ 
      currentTime: new Date(),
      deadline: this.getDeadline(minutes), 
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
      this.audio.current.play();

      newState = {
        ...newState,
        currentTime: new Date(),
        isBreak: !isBreak,
        tally: tally + 1, 
        deadline: this.getDeadline(isBreak ? breakLength : workLength), 
      };
    }

    this.setState(newState);
  }

  resetClock = () => {
    const { workLength } = this.state;

    this.stop();
    this.setState({
      currentTime: 0,
      deadline: 0,
      minutes: workLength,
      seconds: '00',
    });
  }

  incTime = () => {
    const { minutes } = this.state;
    this.setState({ minutes: minutes + 1 });
  }

  decrTime = () => {
    const { minutes } = this.state;

    if (minutes > 1) {
      this.setState({ minutes: minutes - 1 });
    } else {
      return null;
    }
  }

  render() {

    const { minutes, seconds, tally, isBreak } = this.state;

    return (
      <div className="App">
        <Modal />

        <h3 className="title">Pomodoro Timer</h3>

        <Timer 
          minutes={minutes} 
          seconds={seconds}
          tally={tally} 
          incTime={this.incTime}
          decrTime={this.decrTime}
          status={isBreak ? 'break' : 'work'} 
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

        <Footer />
      </div>
    );
  }
}

export default App;

/** Bugs to fix:
 * Decrement to -1
 * Pause functionality
 * Getter functions. this.get.workLength
 * 1 min --> break --> 5 minute work?
 * Tally % 4 then 20 minute break
 */