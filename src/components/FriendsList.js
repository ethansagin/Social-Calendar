import React, {Component} from 'react'

class FriendsList extends Component {
    render() {
        const friendsList = this.props.friends.map((f, i) => {
            return <li key={i}>{f.name}</li>
        })

        return(
            <ul>
                {friendsList}
            </ul>
        )
    }
}

export default FriendsList