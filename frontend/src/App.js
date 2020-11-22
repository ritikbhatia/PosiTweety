import React, { Component } from 'react';
import './App.css';
import './style.css';
import { FocusGraph } from './components/HomePage'
import Viz from './components/CategoryViz';
import { Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import { Media } from './components/Media';
import { News } from './components/News';
import { Home } from './components/Home';
import { Resources } from './components/Resources'
import { Tweets } from './components/Tweets'
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
        <React.Fragment>
              <div className="news-container" style={{"backgroundColor":"#525252"}}>
                  <Particles id="particle-canvas" params={{
                  "particles": {
                      "number": {
                          "value": 80
                      },
                      "size": {
                          "value": 3
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "grab"
                          }
                      }
                  }
              }}/>
              <Switch>
                <Route exact path='/' component={ FocusGraph }/>
                <Route exact path='/stats' component={ Viz }/>
                <Route exact path='/dashboard' component={Home}/>
                <Route exact path='/dashboard/tweets' component={Tweets}/>
                <Route exact path='/dashboard/about' component={About} />
                <Route exact path='/dashboard/media' component={Media} />
                <Route exact path='/dashboard/news' component={News} />
                <Route exact path='/dashboard/resources' component={Resources} />
            </Switch>
          </div>
        </React.Fragment>
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