import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions/friends'
import { getMeetups } from '../actions/meetups'
import { findUpcomingBirthdays, findFriendsWithoutNextMeetup } from '../helpers'
import UpcomingMeetups from '../components/UpcomingMeetups'
import UpcomingBirthdays from '../components/UpcomingBirthdays'
import UnscheduledMeetups from '../components/UnscheduledMeetups'


class UpcomingContainer extends Component {
    componentDidMount(){
        this.props.getFriends()
        this.props.getMeetups()
    }

    render(){
        return(
            <div>
                <UpcomingMeetups futureMeetups={this.props.futureMeetups} />
                <UpcomingBirthdays birthdayFriends={this.props.friendsWithBirthdays} />
                <UnscheduledMeetups friendsWithoutNextMeetup={this.props.friendsWithoutNextMeetup} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friendsWithBirthdays: findUpcomingBirthdays(state.friendReducer.friends),
        friendsWithoutNextMeetup: findFriendsWithoutNextMeetup(state.friendReducer.friends),
        futureMeetups: state.meetupReducer.meetups.filter(m => ((new Date(m.date) - (new Date()) > 0)))
    }
}

export default connect(mapStateToProps, { getFriends, getMeetups })(UpcomingContainer)

