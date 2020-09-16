import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {


    render() {
        return (
            <div>
                <NavLink to={`/${this.props.id}/addnew`}>Create your recipe</NavLink>
                <NavLink to='/posts'>Shared Posts</NavLink>

            </div>
        )
    }
}

export default NavBar;