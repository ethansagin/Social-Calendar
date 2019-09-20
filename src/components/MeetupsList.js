import React from 'react';

const MeetupsList = (props) =>
    <ul>
        {props.meetups.map((m, i) =>
            <li key={i}>
                {m.date}
                <button id={m.id} onClick={props.handleOnClick}> X </button>
            </li>
        )}
    </ul>

export default MeetupsList