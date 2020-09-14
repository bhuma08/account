import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './containers.js/dashboard'
import LoginCard from './containers.js/login'

export class App extends Component {
    render() {
        return (
            <div id="app">
                <h1>Say Cheese!</h1>
                <Switch>
                    {/* <Route path='/:id/dashboard' component={ Dashboard }/> */}
                    <Route path='/check' component={ Dashboard }/>
                    <Route path='/login' component={ LoginCard }/>
                </Switch>
              
            </div>
        )
    }
}

export default App;