import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions/friends'

class FriendInput extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            visit_interval: 1,
            last_meetup: '',
            next_meetup: '',
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
        this.props.addFriend(friend)
        this.setState({
            name: '',
            visit_interval: 1,
            last_meetup: '',
            loading: false,
            showForm: false
        })
    }

    render() {
        const form =
            <form onSubmit={this.handleSubmit}>
                <label>Your Friend's Name</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>

                <label>How Often (in Months) Would You Like to Meetup?</label>
                <input type='number' name='visit_interval' value={this.state.visit_interval} onChange={this.handleChange} /><br/>

                <label>When Was the Last Time You Got Together?</label>
                <input type='date' name='last_meetup' value={this.state.last_meetup} onChange={this.handleChange} /><br/>

                <input type='submit' value='Add Friend' /><br/>

                <hr/>

            </form>

    const button =
        <button onClick={this.handleClick}>Add a Friend!</button>

        return(
            <div className='friend-input'>
                {this.state.showForm ? form : button}
            </div>
        )
    }
}

export default connect(null, { addFriend })(FriendInput)