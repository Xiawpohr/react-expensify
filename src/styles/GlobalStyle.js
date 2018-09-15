import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`${props => css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .active-link {
    font-weight: bold;
  }
`}`

export default GlobalStyle
