import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { IRootState } from '../reducers'
import { IUserState } from '../reducers/user'
import { updateName } from '../actions/user'

interface IDispatchProps {
  updateName (name: string): void
}

function mapStateToProps (state: IRootState): IUserState {
  return state.user
}

function mapDispatchToProps (dispatch: Dispatch): IDispatchProps {
  return {
    updateName: (name) => {
      dispatch(updateName(name))
    }
  }
}

export default connect<IUserState, IDispatchProps, {}, IRootState>(mapStateToProps, mapDispatchToProps)(Home)