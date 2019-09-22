import React from 'react'
import { formatDate } from '../helpers'

const sortedMeetups = (m) => {
    return m.sort((a, b) => (a.date > b.date) ? 1 : -1)
}

const UpcomingMeetups = (props) => 
    <div className='upcoming-meetups'>
        {console.log(props.bdays)}
        <h3>You have the following upcoming meetups:</h3>
        <ol>
            {sortedMeetups(props.futureMeetups).map((m, i) =>
                <li key={i}>
                    {formatDate(m.date)} at {m.location} with {m.friend.name}
                </li>    
            )}
        </ol>
    </div>


export default UpcomingMeetups