import React from 'react';
import { formatDate } from '../helpers'

const MeetupsList = (props) =>
    <ul>
        {props.meetups.sort((a, b) => (a.date < b.date) ? 1 : -1).map((m, i) =>
            <li key={i}>
                {formatDate(m.date)}
                <button id={m.id} onClick={props.handleOnClick}> X </button> <br/>
                <p>Time: {m.time}</p>
                <p>Location: {m.location}</p>
                <p>Comments: {m.comments}</p>
            </li>
        )}
    </ul>

export default MeetupsList
