import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: ${props => props.theme.colors.background.darkblue};
    color: ${props => props.theme.colors.text.lightgray};
    font-family: 'Varela Round', sans-serif;
  }
`
