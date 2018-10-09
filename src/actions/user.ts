import { USER_UPDATE_NAME } from '../constants/actions'

interface IPayload {
  name: string
}
export interface IUpdateName {
  type: string
  payload: IPayload
}

export const updateName = (name: string): IUpdateName => {
  return {
    type: USER_UPDATE_NAME,
    payload: {
      name: name
    }
  }
}