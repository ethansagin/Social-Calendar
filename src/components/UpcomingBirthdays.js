import React from 'react'
import { formatBirthDate } from '../helpers'

const sortedBirthdayLis = (arr) => {
    return arr.sort((a, b) => 
        ((new Date(a.birthday).getMonth()) > (new Date(b.birthday).getMonth())) ? 1 : -1)
        .map((f, i) =>
            <li key={i}>
                {formatBirthDate(f.birthday)} - {f.name}
            </li>    
        )
}

const UpcomingBirthdays = (props) => 
    <div>
        <h3>Don't forget to wish them a Happy Birthday!</h3>
        <ul>
            {sortedBirthdayLis(props.birthdayFriends)}
        </ul>
    </div>


export default UpcomingBirthdays