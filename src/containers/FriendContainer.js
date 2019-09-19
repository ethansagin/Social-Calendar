import React, { Component } from 'react';
import { connect } from 'react-redux'
import Friend from '../components/Friend'
import MeetupInput from '../components/MeetupInput'
import MeetupList from '../components/MeetupList'

class FriendContainer extends Component {
    render() {
        const friend = this.props.friends.filter(f => f.id === parseInt(this.props.match.params.id))[0]
        return(
            <div className='friend-container'>
                <Friend friend={friend} />
                <hr/>
                <MeetupInput/>
                <MeetupList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      friends: state.friendReducer.friends
    }
}

export default connect(mapStateToProps)(FriendContainer)
