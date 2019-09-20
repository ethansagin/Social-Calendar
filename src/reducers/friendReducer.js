export default (state = {friends: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_FRIENDS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_FRIENDS':
            return {
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
                friends: [...state.friends, action.payload],
                loading: false
            }
        default:
            return state
    }
}