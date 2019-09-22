import React from 'react'
import { Link } from 'react-router-dom'
import{ formatDate } from '../helpers'

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
                Next Meetup: {<strong>UNSCHEDULED</strong>}
            </li>
        )}
    </ul>



export default FriendsList