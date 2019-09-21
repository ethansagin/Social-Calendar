import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editFriend } from '../actions/friends'

class FriendUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.friend.id,
            name: props.friend.name,
            birthday: props.friend.birthday,
            visit_interval: props.friend.visit_interval,
            loading: false,
            showForm: false
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            showForm: true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const friend = {...this.state}
        this.props.editFriend(friend)
        this.setState({
            name: this.props.friend.name,
            birthday: this.props.friend.birthday,
            visit_interval: this.props.friend.visit_interval,
            loading: false,
            showForm: false
        })
    }

    render() {
        const form =
            <form onSubmit={this.handleSubmit}>
                <label>Your Friend's Name</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>

                <label>Your Friend's Birthday</label>
                <input type='date' name='birthday' value={this.state.birthday} onChange={this.handleChange} /><br/>

                <label>How Often (in Months) Would You Like to Meetup?</label>
                <input type='number' name='visit_interval' value={this.state.visit_interval} onChange={this.handleChange} /><br/>

                <input type='submit' value='Update Info' /><br/>

                <hr/>

            </form>

    const button =
        <button onClick={this.handleClick}>Update {this.props.friend.name}'s Info</button>

        return(
            <div className='friend-update'>
                {this.state.showForm ? form : button}
            </div>
        )
    }
}

export default connect(state => ({friends: state.friends}), { editFriend })(FriendUpdate)