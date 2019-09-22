import React from 'react'
import { Link } from 'react-router-dom'
import{ formatDate, findLastMeetup } from '../helpers'
import { findNextMeetup } from '../helpers'

const friendLink = (friend) => 
    <Link to={`friends/${friend.id}`}>
        <button>{friend.name}</button>
    </Link>


const FriendsList = (props) => 
    <ul>    
        {props.friends.map((f, i) => 
            <li key={i}>
                {friendLink(f)} 
                <br/>
                Next Meetup: {<strong>{findNextMeetup(f)}</strong>} <br/>
                Last Meetup: {findLastMeetup(f)}
            </li>
        )}
    </ul>



export default FriendsList