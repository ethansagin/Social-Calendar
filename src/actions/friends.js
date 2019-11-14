const PROXY = 'https://cors-anywhere.herokuapp.com/'
const API_URL = 'https://social-calendar-api-postgresql.herokuapp.com/'

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_FRIENDS'})
        return fetch(PROXY + API_URL + '/friends')
        .then(resp => resp.json())
        .then(friends => dispatch({type: 'FETCH_FRIENDS', payload: friends}))
    }
}

export const addFriend = (friend) => {
    return (dispatch) => {
        dispatch({type: 'ADD_FRIEND'})
        return fetch(PROXY + API_URL + '/friends', {
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

export const editFriend = (friend) => {
    return (dispatch) => {
        dispatch({type: 'UPDATE_FRIEND'})
        return fetch(PROXY + API_URL + `/friends/${friend.id}`, {
            method: 'PUT',
            body: JSON.stringify(friend),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(friend => dispatch({type: 'FRIEND_UPDATED', payload: friend}))
    }
}