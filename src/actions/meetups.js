export const getMeetups = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_MEETUPS'})
        return fetch("https://social-calendar-api-postgresql.herokuapp.com/" + '/meetups')
        .then(resp => resp.json())
        .then(meetups => dispatch({type: 'FETCH_MEETUPS', payload: meetups}))
    }
}

export const addMeetup = (meetup) => {
    return (dispatch) => {
        dispatch({type: 'ADD_MEETUP'})
        return fetch("https://social-calendar-api-postgresql.herokuapp.com/" + '/meetups', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(meetup => dispatch({type: 'MEETUP_ADDED', payload: meetup}))
    }
}

export const deleteMeetup = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETE_MEETUP'})
        return fetch("https://social-calendar-api-postgresql.herokuapp.com/" + `/meetups/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(meetups => dispatch({type: 'MEETUP_DELETED', payload: {meetups: meetups}}))
    }
}

