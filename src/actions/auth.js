import auth, { GoogleAuthProvider } from '../firebase/auth.js'

export const login = () => async () => {
  await auth.signInWithPopup(GoogleAuthProvider)
}

export const logout = () => async () => {
  await auth.signOut()
}
