import React from 'react';
import './App.css';

const alterWords = ["tasty","edible","a recipe", "smell good"];
const fontList = ['serif','sans-serif','cursive'];
var count = 0;

class Fcubeworl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state properties
      fcube: alterWords[0],
      font: fontList[0]
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        fcube: alterWords[(count++) % alterWords.length],
        font: fontList[(count++) % fontList.length]
    });
  }

  render() {
    return (
      <div>
        <h1>PIZZA</h1>
        <h2 style={{fontFamily: this.state.font}}>I am ... {this.state.fcube}</h2>
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
