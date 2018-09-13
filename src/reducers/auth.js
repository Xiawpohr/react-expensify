import * as types from '../actions/actionTypes.js'

const defaultState = {
  uid: null,
  name: null,
  email: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        uid: action.user.uid,
        name: action.user.name || '',
        email: action.user.email || ''
      }
    case types.LOGOUT_SUCCESS:
      return defaultState
    default:
      return state
  }
}
