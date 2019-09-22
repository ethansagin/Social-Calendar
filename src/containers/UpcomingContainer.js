import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions/friends'
import { getMeetups } from '../actions/meetups'
import { findUpcomingBirthdays } from '../helpers'
import UpcomingMeetups from '../components/UpcomingMeetups'
import UpcomingBirthdays from '../components/UpcomingBirthdays'
import OverdueMeetups from '../components/OverdueMeetups'


class UpcomingContainer extends Component {
    componentDidMount(){
        this.props.getFriends()
        this.props.getMeetups()
    }

    render(){
        return(
            <div>
                <UpcomingMeetups futureMeetups={this.props.futureMeetups} />
                <UpcomingBirthdays friends={this.props.friendsWithBirthdays} />
                <OverdueMeetups friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friendsWithBirthdays: findUpcomingBirthdays(state.friendReducer.friends),
        futureMeetups: state.meetupReducer.meetups.filter(m => ((new Date(m.date) - (new Date()) > 0))),
        friends: state.friendReducer.friends
    }
}

export default connect(mapStateToProps, { getFriends, getMeetups })(UpcomingContainer)

