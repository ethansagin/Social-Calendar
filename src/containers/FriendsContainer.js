import React, {Component} from 'react'
import { connect } from 'react-redux'
import FriendInput from '../components/FriendInput'
import FriendsList from '../components/FriendsList'


class FriendsContainer extends Component {
    render() {
        return(
            <div className='friends-container'>
                Friends Container
                <button onClick={this.onClick}>Add Friend</button>
                <FriendInput/>
                {/* <FriendsList/> */}
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
  
  export default connect(mapStateToProps)(FriendsContainer)