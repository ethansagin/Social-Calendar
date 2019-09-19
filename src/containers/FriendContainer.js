import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getFriend } from '../actions/friends'
import Friend from '../components/Friend'

class FriendContainer extends Component {
    componentDidMount(){
        this.props.getFriend(this.props.match.params.id)
    }

    render() {
        return(
            <div className='friend-container'>
                {console.log(this.props.friend)}
                {this.props.loading ? <h3>Loading...</h3> : <Friend friend={this.props.friend} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      friend: state.friendReducer.friend,
      loading: state.friendReducer.loading
    }
}

export default connect(mapStateToProps, { getFriend })(FriendContainer)
