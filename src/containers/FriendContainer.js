import React, { Component } from 'react';
import { connect } from 'react-redux'
import Friend from '../components/Friend'
import FriendUpdate from '../components/FriendUpdate'
import MeetupInput from '../components/MeetupInput'
import MeetupsList from '../components/MeetupsList'
import { getMeetups, deleteMeetup } from '../actions/meetups'


class FriendContainer extends Component {
    componentDidMount(){
        this.props.getMeetups()
    }

    handleClick = (e) => {
        this.props.deleteMeetup(e.target.id)
    }

    render() {
        return(
            <div className='friend-container'>
                <Friend friend={this.props.friend} />
                <FriendUpdate friend={this.props.friend} />
                <hr/>
                <MeetupInput friend_id={this.props.friend.id}/>
                {this.props.loading ? <h3>Loading...</h3> : <MeetupsList meetups={this.props.meetups} handleOnClick={this.handleClick}/>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
      friend: state.friendReducer.friends.filter(f => f.id === parseInt(props.match.params.id))[0],
      meetups: state.meetupReducer.meetups.filter(m => m.friend_id === parseInt(props.match.params.id)),
      loading: state.meetupReducer.loading
    }
}

export default connect(mapStateToProps, { getMeetups, deleteMeetup })(FriendContainer)
