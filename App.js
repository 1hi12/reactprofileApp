import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Ali',
      bio: 'software developer  ',
      imgSrc: 'https://th.bing.com/th?id=OIP.5gz9W-O09wc7OSx4nJtYpwHaFd&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2', 
      profession: 'Software Developer',
    },
    shows: false,
    intervalId: null,
    timecounter: 0,
  };

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState((prevState) => ({
          timecounter: prevState.timecounter + 1,
        }));
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timecounter } = this.state;

    return (
      <div className="App">
        <h1>React Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {timecounter} seconds</p>
      </div>
    );
  }
}

export default App;
