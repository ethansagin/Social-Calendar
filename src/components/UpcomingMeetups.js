import React from 'react'
import { formatDate } from '../helpers'

const sortedMeetupLis = (meetups) => {
    return meetups.map((m, i) =>
        <li key={i}>
            {formatDate(m.date)} at {m.location} with {m.friend.name}
        </li>    
    )
}

const UpcomingMeetups = (props) => 
    <div className='upcoming-meetups'>
        <h3>You have the following upcoming meetups:</h3>
        <ol>
            {sortedMeetupLis(props.futureMeetups)}
        </ol>
    </div>


export default UpcomingMeetups