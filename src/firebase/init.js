import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBcpMl3pQmUyhySD7n8wju_zQhGvOt1PzI',
  authDomain: 'react-expensify-b763a.firebaseapp.com',
  databaseURL: 'https://react-expensify-b763a.firebaseio.com',
  projectId: 'react-expensify-b763a',
  storageBucket: 'react-expensify-b763a.appspot.com',
  messagingSenderId: '683618825496'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
