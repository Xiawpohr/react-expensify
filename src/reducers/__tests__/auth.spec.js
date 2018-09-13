import * as actions from '../../actions/auth.js'
import authReducer from '../auth.js'

test('shuold return initial state', () => {
  expect(authReducer(undefined, { type: '@@INIT' })).toEqual({
    uid: null,
    name: null,
    email: null
  })
})

test('should handle login success action', () => {
  const user = {
    uid: '123abc',
    name: 'Arthur',
    email: 'test@example.com'
  }
  const state = authReducer(undefined, actions.loginSuccess(user))
  expect(state).toEqual(user)
})

test('should handle logout success action', () => {
  const user = {
    uid: '123abc',
    name: 'Arthur',
    email: 'test@example.com'
  }
  const state = authReducer(user, actions.logoutSuccess())
  expect(state).toEqual({
    uid: null,
    name: null,
    email: null
  })
})
