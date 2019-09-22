import React from 'react'
import { findUpcomingBirthdays } from '../helpers'
import { formatDate } from '../helpers'

const sortedBirthdayLis = (arr) => {
    return arr.sort((a, b) => (a.date > b.date) ? 1 : -1).map((f, i) =>
        <li key={i}>
            {formatDate(f.birthday)} - {f.name}
        </li>    
    )
}

const UpcomingBirthdays = (props) => 
    <div>
        <h3>Don't forget to wish them a Happy Birthday!</h3>
        <ul>
            {sortedBirthdayLis(findUpcomingBirthdays(props.friends))}
        </ul>
    </div>


export default UpcomingBirthdays