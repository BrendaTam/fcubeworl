import React from 'react';
import './App.css';

const alterWords = ["an fartist","a pro gramer", "a phreddy"];
var count = 0;

class Fcubeworl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fcube: "a phreddy"};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        fcube: alterWords[(count++) % alterWords.length]
    });
  }

  render() {
    return (
      <div>
        <h1>F Cubeworl</h1>
        <h2>I am ... {this.state.fcube}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Fcubeworl/>
    </div>
  );
}

export default App;
