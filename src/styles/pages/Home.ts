import styled from 'styled-components'

export const Container = styled.div`
    .max-width {
      max-width: 1300px;
      width: 100%;
      padding:  10px;
      margin: auto;

    }
  

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text.lightblue};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
