import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import FocusGraph from './components/HomePage';
import Viz from './components/CategoryViz';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FocusGraph /> */}
        <Viz></Viz>
      </div>
    );
  }
}

export default App;