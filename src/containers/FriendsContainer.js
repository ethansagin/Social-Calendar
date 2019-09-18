import React, {Component} from 'react'
import { connect } from 'react-redux'
import FriendInput from '../components/FriendInput'
import FriendsList from '../components/FriendsList'


class FriendsContainer extends Component {
    render() {
        return(
            <div className='friends-container'>
                Friends Container
                {/* <FriendInput/>
                <FriendsList/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      friends: state.friendReducer.friends,
      loading: state.friendsReducer.loading
    }
  }
  
  export default connect(mapStateToProps)(FriendsContainer)