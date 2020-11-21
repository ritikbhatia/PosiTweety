import React, { Component } from 'react';
import './App.css';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { FocusGraph } from './components/HomePage'
import Viz from './components/CategoryViz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <BrowserRouter>
            <FocusGraph />
          </BrowserRouter>
        </React.Fragment>
        {/* <Viz /> */}
      </div>
    );
  }
}

// import './App.css';
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Dashboard } from './components/Dashboard';

// function App() {
//   return (
//     <React.Fragment>
//       <BrowserRouter>
//         <Dashboard />
//       </BrowserRouter>
//     </React.Fragment>
//   );
// }

export default App;