export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_FRIENDS'})
        return fetch('/friends')
        .then(resp => resp.json())
        .then(friends => dispatch({type: 'FETCH_FRIENDS', payload: friends}))
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