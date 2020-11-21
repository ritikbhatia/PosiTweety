import { NavigationBar } from './Navigationbar';
import { Switch, Route } from 'react-router-dom';
import { Tweets } from './Tweets'
import React from 'react';
import { About } from './About';
import { Media } from './Media';
import { News } from './News';
import { Home } from './Home';
import { Resources } from './Resources'

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavigationBar />
                </div>
                <div>
                <Switch>
                    <Route exact path='/dashboard' component={Home}/>
                    <Route exact path='/dashboard/tweets' component={Tweets}/>
                    <Route exact path='/dashboard/about' component={About} />
                    <Route exact path='/dashboard/media' component={Media} />
                    <Route exact path='/dashboard/news' component={News} />
                    <Route exact path='/dashboard/resources' component={Resources} />
                </Switch>
                </div>
            </div>

        );
    }
}