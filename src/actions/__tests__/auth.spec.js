import * as types from '../actionTypes.js'
import * as actions from '../auth.js'

test('should generate LOGIN_SUCCESS action object', () => {
  const user = {
    uid: '1234',
    name: 'arthur'
  }
  expect(actions.loginSuccess(user)).toEqual({
    type: types.LOGIN_SUCCESS,
    user
  })
})

test('should generate LOGOUT_SUCCESS action.object', () => {
  expect(actions.logoutSuccess()).toEqual({
    type: types.LOGOUT_SUCCESS
  })
})
