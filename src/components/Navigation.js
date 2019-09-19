import React from 'react';
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () => 
    <div>
        <NavLink
            to='/'
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
        >Home</NavLink>

        <NavLink
            to='/friends'
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
        >Friend List</NavLink>
    </div>


export default Navigation