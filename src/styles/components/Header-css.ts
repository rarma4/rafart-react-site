import styled from 'styled-components'

export const Container = styled.div`
  background-image: url("img/bk-developer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
      padding: 0 10px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: inherit;
      flex-direction: column;

      .imgDeveloper{
        img{
          width: 500px;
          height: 400px;
          @media (max-width: 947px) {
            width: 100%;
            height: auto;
          }
        }
      }
      h1 {
        color: ${props => props.theme.colors.text.lightgray};
        font-weight: 900;
      }

    }

  @media (max-width: 947px) {
    height: auto;
    h1 {
        font-size: 32px;
        text-align: center;
    }
    p {
      text-align: center;
    }
    .imgDeveloper{
        display:flex;
        margin-top: 30px;
    }
  }
`
