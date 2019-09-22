import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions/friends'
import { getMeetups } from '../actions/meetups'
import { upcomingBirthdays } from '../helpers'
import UpcomingMeetups from '../components/UpcomingMeetups'
import UpcomingBirthdays from '../components/UpcomingBirthdays'


class UpcomingContainer extends Component {
    componentDidMount(){
        this.props.getFriends()
        this.props.getMeetups()
    }

    render(){
        return(
            <div>
                <UpcomingMeetups futureMeetups={this.props.futureMeetups} bdays={this.props.upcomingBirthdays}/>
                <UpcomingBirthdays friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendReducer.friends,
        futureMeetups: state.meetupReducer.meetups.filter(m => ((new Date(m.date) - (new Date()) > 0))),
    }
}

export default connect(mapStateToProps, { getFriends, getMeetups })(UpcomingContainer)

