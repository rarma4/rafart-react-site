import styled from 'styled-components'

export const Container = styled.div`
  bbackground: ${props => props.theme.colors.background.darkblue};
  height: 400px;
  position: relative ;
  /* font-size: 20px;
  background-color: #121a2f;
  width: 100%;
  z-index: 999;
  padding: 20px 0;
  border-bottom: solid ${props => props.theme.colors.background.lightblue} 5px; */

  .max-width {
      max-width: 1300px;
      width: 100%;
      padding: 20px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: inherit;
      flex-direction: column;

      .title{
       
        border-bottom: 2px solid ${props => props.theme.colors.text.lightblue};
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
        color: ${props => props.theme.colors.text.lightblue};
        font-weight: 900;
      }

      }

    }

  @media (max-width: 947px) {

  }
`
