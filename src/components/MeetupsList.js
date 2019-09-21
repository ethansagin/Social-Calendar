import React from 'react';

const MeetupsList = (props) =>
    <ul>
        {props.meetups.map((m, i) =>
            <li key={i}>
                {m.date}
                <button id={m.id} onClick={props.handleOnClick}> X </button> <br/>
                <p>Time: {m.time}</p>
                <p>Location: {m.location}</p>
                <p>Comments: {m.comments}</p>
            </li>
        )}
    </ul>

export default MeetupsList