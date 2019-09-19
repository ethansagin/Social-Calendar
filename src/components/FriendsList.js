import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class FriendsList extends Component {
    render() {
        const friendLink = (friend) => 
            <Link to={`friends/${friend.id}`}>
                <button>{friend.name}</button>
            </Link>
        

        const friendsList = this.props.friends.map((f, i) => 
                <li key={i}>
                    {friendLink(f)} <br/>
                    Next Meetup: {f.next_meetup}
                </li>
        )

        return(
            <ul>
                {friendsList}
            </ul>
        )
    }
}

export default FriendsList