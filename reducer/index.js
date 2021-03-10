import {combineReducers} from 'redux'
import newsReducer from './newsReducer'

const allReducer = combineReducers({reducer: newsReducer})

export default allReducer