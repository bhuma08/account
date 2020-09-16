import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginCard from './containers.js/login'
import AddNewPage from './pages.js/AddNewPage'
import DashboardPage from './pages.js/DashboardPage'
import AllPosts from './containers.js/allposts'
import SignUpCard from './containers.js/signup'

export class App extends Component {
    render() {
        return (
            <div id="app">
                <h1>Say Cheese!</h1>
                <Switch>
                    <Route path='/:id/dashboard' component={ DashboardPage }/>
                    <Route path='/:id/addnew' component={ AddNewPage }/>
                    <Route path='/login' component={ LoginCard }/>
                    <Route path='/signup' component={ SignUpCard }/>
                    <Route path='/posts' component={ AllPosts }/>
                </Switch>
              
            </div>
        )
    }
}

export default App;