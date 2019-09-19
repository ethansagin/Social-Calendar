import React from 'react';

const Friend = (props) =>
    <div className='friend'>
        {console.log(props.friend)}
        <h2>My Friend {props.friend.name}</h2>
    </div>

export default Friend
