export const addMeetup = (meetup) => {
    return (dispatch) => {
        console.log(meetup)
        dispatch({type: 'ADD_MEETUP'}, meetup)
        return fetch('/meetups', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(meetup => dispatch({type: 'MEETUP_ADDED', payload: friend}))
    }
}

export const addFriend = (friend) => {
    return (dispatch) => {
        console.log(friend)
        dispatch({type: 'ADD_FRIEND'}, friend)
        return fetch('/friends',{
            method: 'POST',
            body: JSON.stringify(friend),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(friend => dispatch({type: 'FRIEND_ADDED', payload: friend}))
    }
}