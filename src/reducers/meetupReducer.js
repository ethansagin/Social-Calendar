export default (state = {meetups: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_MEETUPS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MEETUPS':
            return {
                meetups: action.payload,
                loading: false
            }
        case 'ADD_MEETUP':
            return {
                ...state,
                loading: true
            }
        case 'MEETUP_ADDED':
            return {
                meetups: [...state.meetups, action.payload],
                loading: false
            }
        case 'DELETE_MEETUP':
            return {
                ...state
            }
        case 'MEETUP_DELETED':
            return {
                ...state,
                meetups: action.payload.meetups
            }
        default:
            return state
    }
}