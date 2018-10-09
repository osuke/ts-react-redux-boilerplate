import { combineReducers } from 'redux'
import { user, IUserState } from './user'

export interface IRootState {
  user: IUserState
}

export default combineReducers({
  user,
})