export default (state = {friends: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_FRIENDS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_FRIENDS':
            return {
                ...state,
                friends: action.payload,
                loading: false
            }
        case 'ADD_FRIEND':
            return {
                ...state,
                loading: true
            }
        case 'FRIEND_ADDED':
            return {
                ...state,
                friends: [...state.friends, action.payload],
                loading: false
            }
        case 'UPDATE_FRIEND':
            return {
                ...state,
                loading: true
            }
        case 'FRIEND_UPDATED':
            let newFriends = state.friends.filter(f => f.id !== action.payload.id).concat(action.payload)
            return {
                ...state, 
                friends: newFriends,
                loading: false
            }
        default:
            return state
    }
}