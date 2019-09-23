import React from 'react'
import { findLastMeetup, determineOverdueMeetup } from '../helpers'

const unscheduledLis = (friends) =>
    friends.map(f => 
        <li>
            {f.name}<br/>
            Last Meetup: {findLastMeetup(f)}<br/>
            {f.meetups.length > 0 ? determineOverdueMeetup(f) : ''}
        </li>
    )

const UnscheduledMeetups = (props) =>
    <div className='overdue-meetups'>
        <h3>Schedule your next meetup with these friends!</h3>
        <ul>
            {unscheduledLis(props.friendsWithoutNextMeetup)}
        </ul>
    </div>

export default UnscheduledMeetups