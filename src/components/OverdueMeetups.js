import React from 'react'
import { formatDate } from '../helpers'
import { findOverdue } from '../helpers'


const OverdueMeetups = (props) =>
    <div className='overdue-meetups'>
        <h3>OVERDUE: Schedule this friend for a Meetup!</h3>
        {console.log(findOverdue(props.friends))}
        {/* <NAME> - overdue by <#> days */}
    </div>

export default OverdueMeetups

// take friend.visit_interval, convert to milliseconds
// subtract friend's last meetup from current Date
// if > visit_interval in milli, divide result by 86400000 rounded down
// pass friend name and quotient to component for rendering