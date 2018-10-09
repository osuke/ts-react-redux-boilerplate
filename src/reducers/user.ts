import { IUpdateName } from '../actions/user'
import { USER_UPDATE_NAME } from '../constants/actions'

export interface IUserState {
  name: string
}
const initialState: IUserState = {
  name: 'default name'
}

export const user = (state = initialState, action: IUpdateName) => {
  switch (action.type) {
    case USER_UPDATE_NAME:
      return (Object as any).assign({}, state, {
        name: action.payload.name
      })
    default:
      return state
  }
}