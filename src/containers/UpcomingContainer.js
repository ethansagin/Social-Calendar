import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions/friends'
import { getMeetups } from '../actions/meetups'


class UpcomingContainer extends Component {
    render(){
        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendReducer.friends
    }
}

export default connect(mapStateToProps, { getFriends, getMeetups })(UpcomingContainer)

