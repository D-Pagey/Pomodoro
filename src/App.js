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

  setDeadLine = () => {
    const currentTime = new Date();
    const deadline = new Date(new Date().getTime() + 
    (this.state.minutes * 60 * 1000));
    const minutesRemaining = (deadline - currentTime) / 1000 / 60;
    const secondsRemaining = (deadline - currentTime) / 1000;
    this.setState({ 
      currentTime: currentTime,
      deadline: deadline,
      minutes: minutesRemaining,
      seconds: secondsRemaining % 60,
     });
  }

  render() {
    return (
      <div className="App">
        <Modal />
        <h3 className="title">Pomodoro Timer</h3>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <Actions deadline={this.setDeadLine} />
      </div>
    );
  }
}

export default App;
