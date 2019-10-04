import React, { Component } from 'react';
import "../Home.css"

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <h2>Welcome to the React Social Calendar!</h2>
                <p>
                    Keep track of your friends to make sure you're meeting with them on a regular basis!<br/>
                </p>

                <img src="https://timesofindia.indiatimes.com/blogs/wp-content/uploads/2017/06/friendship.jpg" alt="pic_of_friends"/>

                <p className="disclaimer">
                    <strong>Note: </strong>This app uses a Rails API to store your information. <br/>
                    Make sure that you have started the API in a second terminal before using (see README for further instructions)

                </p>
            </div>
        )
    }
}

export default Home