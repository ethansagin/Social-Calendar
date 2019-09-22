import React, {Component} from 'react'
import { connect } from 'react-redux'
import FriendInput from '../components/FriendInput'
import FriendsList from '../components/FriendsList'
import { getFriends } from '../actions/friends'

class FriendsContainer extends Component {
    componentDidMount(){
        this.props.getFriends()
    }

    render() {
        return(
            <div className='friends-container'>
                <h2>My Friends</h2>
                <FriendInput/>
                {this.props.loading ? <h3>Loading...</h3> : <FriendsList friends={this.props.friends} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      friends: state.friendReducer.friends,
      loading: state.friendReducer.loading
    }
}
  
export default connect(mapStateToProps, { getFriends })(FriendsContainer)