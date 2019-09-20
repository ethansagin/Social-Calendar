import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addMeetup } from '../actions/meetups'

class MeetupInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            location: '',
            comments: '',
            friend_id: props.friend_id,
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
        const meetup = {...this.state}
        this.props.addMeetup(meetup)
        this.setState({
            date: '',
            location: '',
            comments: '',
            loading: false,
            showForm: false
        })
    }

    render() {
        const form =
            <form onSubmit={this.handleSubmit}>
                <label>Date of Meetup</label>
                <input type='date' name='date' value={this.state.name} onChange={this.handleChange} /><br/>

                <label>Location</label>
                <input type='text' name='location' value={this.state.visit_interval} onChange={this.handleChange} /><br/>

                <label>Comments</label>
                <input type='text' name='comments' value={this.state.last_meetup} onChange={this.handleChange} /><br/>

                <input type='submit' value='Add Meetup' /><br/>

                <hr/>

            </form>
        
        const button =
            <button onClick={this.handleClick}>Add a Meetup!</button>

        return(
            <div className='meetup-input'>
                {this.state.showForm ? form : button}
            </div>
        )
    }
}

export default connect(null, { addMeetup })(MeetupInput)