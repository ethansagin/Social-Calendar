import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <h2>Welcome to the React Social Calendar!</h2>
                <p>
                    This is Ethan Sagin's final project for the Flatiron Online Software Engineering Bootcamp.<br/>
                    Keep track of your friends to make sure you're meeting with them on a regular basis!<br/>
                    
                    <strong>Note: </strong>This app uses a Rails API to store your information. Make sure that you have started the API in a second terminal before using (see README for further instructions)

                </p>
            </div>
        )
    }
}

export default Home