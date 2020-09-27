import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginCard from './containers.js/login'
import AddNewPage from './pages.js/AddNewPage'
import DashboardPage from './pages.js/DashboardPage'
import AllPosts from './containers.js/allposts'
import SignUpCard from './containers.js/signup'
import LandingPage from './pages.js/LandingPage'

export class App extends Component {
    render() {
        return (
            <div id="app">
                
                <Switch>
                    <Route exact path='/' component ={LandingPage}/>
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