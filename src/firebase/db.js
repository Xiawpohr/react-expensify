import firebase from './init.js'

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default db
