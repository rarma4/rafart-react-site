import styled from 'styled-components'

export const Container = styled.div`
  bbackground: ${props => props.theme.colors.background.darkblue};
  height: auto;
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
       margin: 20px 0;

       h2{
         color: ${props => props.theme.colors.text.lightblue};
         font-weight: 900;
       }
       
     }
    .queSou{

      h3 {
          color: ${props => props.theme.colors.text.lightblue};
          font-weight: 500;
      }

      p {
          color: ${props => props.theme.colors.text.lightgray};
          font-weight: 100;
          font-size: 18px;
      }

    }
    .habilidades{
      @media (max-width: 947px) {
        margin-top: 50px;
      }

      h3 {
          color: ${props => props.theme.colors.text.lightblue};
          font-weight: 500;
      }

      p {
          color: ${props => props.theme.colors.text.lightgray};
          font-weight: 100;
          font-size: 14px;
      }

    }

    .formacao{
      margin: 50px 10px;
      background-color: ${props => props.theme.colors.background.mediumblue};
      padding: 30px;
      width: 620px ;
      border-radius: 5px;

      @media (max-width: 947px) {
        margin: 10px 10px;
        margin-top: 50px ;
        width: 95% ;
      }

      h3 {
          color: ${props => props.theme.colors.text.lightblue};
          font-weight: 500;
      }

      p {
          color: ${props => props.theme.colors.text.lightgray};
          font-weight: 100;
          font-size: 14px;
      }

      .line{
        border-bottom: 1px solid ${props => props.theme.colors.text.lightgray};
      }

    }

    .experiencia{
      margin: 50px 10px;
      background-color: ${props => props.theme.colors.background.mediumblue};
      padding: 30px;
      width: 620px;
      border-radius: 5px;
      @media (max-width: 947px) {
        margin: 10px 10px;
        width: 95% ;
      }

      h3 {
          color: ${props => props.theme.colors.text.lightblue};
          font-weight: 500;
      }

      p {
          color: ${props => props.theme.colors.text.lightgray};
          font-weight: 100;
          font-size: 14px;
      }

      .line{
        border-bottom: 1px solid ${props => props.theme.colors.text.lightgray};
      }

    }



    }

  @media (max-width: 947px) {

  }
`
