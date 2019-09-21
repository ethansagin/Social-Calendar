import React from 'react';

const monthStatement = (month) => {
    if(month > 1) {
        return `every ${month} months`
    } else if(month === 1) {
        return 'every month'
    }
}

const Friend = (props) =>
    <div className='friend'>
        <h2>My Friend {props.friend.name}</h2>
        <p>Birthday: {props.friend.birthday}</p>
        <p>Make sure to visit with {props.friend.name} {monthStatement(props.friend.visit_interval)}.</p>
    </div>

export default Friend
