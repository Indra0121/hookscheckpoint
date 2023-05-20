import React, { Component } from 'react';
import './App.css'
import img from './component/profile/img/20456790.jpeg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Yassir km',
        bio: 'A mysterious person',
        imgs: `${img}`,
        profession: 'Secret agent'
      },
      show: false,
      timer: 0
    };
  }

  componentDidMount() {
    // Start the timer when the component mounts
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.show ? prevState.timer + 1 : 0 // Increment the timer by 1 if show is true, otherwise reset to 0
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearInterval(this.interval);
  }

  // A handler function to toggle the show state
  handleToggle = () => {
    this.setState((prevState) => ({
      show: !prevState.show, // Flip the show boolean
      timer: 0 // Reset the timer to 0 when toggling off
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Project</h1>
        <button onClick={this.handleToggle}>Toggle Profile</button>
        {this.state.show && ( // Conditional rendering based on the show state
          <div className="profile">
            <img src={this.state.person.imgs} alt="Profile" />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time interval: {this.state.timer} seconds</p>
      </div>
    );
  }
}

export default App;
