import React, {Component} from 'react'

class FriendInput extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            visit_interval: 1,
            last_meetup: '',
            next_meetup: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        
    }

    render() {
        return(
            <div className='friend-input'>
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
            </div>
        )
    }
}

export default FriendInput