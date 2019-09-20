import { combineReducers } from 'redux'
import friendReducer from './friendReducer'
import meetupReducer from './meetupReducer'

const rootReducer = combineReducers({
    friendReducer,
    meetupReducer
})

export default rootReducer