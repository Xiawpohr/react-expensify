import * as types from './actionTypes.js'
import auth, { GoogleAuthProvider } from '../firebase/auth.js'

export const loginSuccess = (user = {}) => ({
  type: types.LOGIN_SUCCESS,
  user
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
})

export const login = () => async () => {
  await auth.signInWithPopup(GoogleAuthProvider)
}

export const logout = () => async () => {
  await auth.signOut()
}
