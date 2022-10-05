import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;

    i {
    margin: 10px;
    font-size: 30px;
    text-decoration: none;
    color: ${props => props.theme.colors.text.lightblue};
    :hover{
      color: ${props => props.theme.colors.text.lightgray};
      transition: all .3s;
      transform: scale(1.3);
    }
    :active{
      transition: all .3s;
      transform: scale(0.8);
    }
  }

  @media (max-width: 947px) {
   
  }
`
