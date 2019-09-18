import React, {Component} from 'react'

class FriendInput extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            visit_interval: 1,
            last_meetup: null,
            next_meetup: null
        }
    }
}