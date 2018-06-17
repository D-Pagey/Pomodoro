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
    seconds: 0,
  }

  startClock = () => {
    this.setDeadLine();
    const timeInterval = setInterval(this.timeLeft, 1000);
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
    this.setState({
      minutes: Math.floor(msLeft / 1000 / 60),
      seconds: msLeft / 1000 % 60,
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
        incTime={this.incTime}
        decrTime={this.decrTime} />
        <Actions 
        start={this.startClock} />
      </div>
    );
  }
}

export default App;