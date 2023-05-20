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

    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.show ? prevState.timer + 1 : 0 
      }));
    }, 1000);
  }

  componentWillUnmount() {
 
    clearInterval(this.interval);
  }


  handleToggle = () => {
    this.setState((prevState) => ({
      show: !prevState.show, 
      timer: 0 
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Project</h1>
        <button onClick={this.handleToggle}>Toggle Profile</button>
        {this.state.show && (
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
