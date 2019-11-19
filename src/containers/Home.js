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

            </div>
        )
    }
}

export default Home