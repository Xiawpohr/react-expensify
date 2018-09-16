import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import AppRouter from './routers/AppRouter.js'
import configureStore from './configureStore.js'
import configureTheme from './configureTheme.js'

export const store = configureStore()
const theme = configureTheme()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme} >
      <AppRouter />
    </ThemeProvider>
  </Provider>
)

export default App
