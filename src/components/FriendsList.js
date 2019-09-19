import React from 'react'
import { Link } from 'react-router-dom'

const friendLink = (friend) => 
    <Link to={`friends/${friend.id}`}>
        <button>{friend.name}</button>
    </Link>


const FriendsList = (props) => props.friends.map((f, i) => 
    <li key={i}>
        {friendLink(f)} <br/>
        Next Meetup: {f.next_meetup}
    </li>
)


export default FriendsList