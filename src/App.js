import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './components/AppRouter.js'
import configureStore from './configureStore.js'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App
