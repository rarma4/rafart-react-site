import styled from 'styled-components'

export const Button = styled.button<{ width?: string, widthMob?: string, align?: string }>`
  width: 100%;
  background-color: ${props => props.theme.colors.background.darkblue};
  border: 0;
  outline: none;
  border-radius: 5px;
  height: 45px;
  text-align: center;
  color: ${props => props.theme.colors.text.lightgray};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  transition: all .3s;
  text-decoration: none;
  ${props => props.width && `width: ${props.width};`}
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;



  @media (max-width: 768px) {
    ${props => props.widthMob && `width: ${props.widthMob};`}
    display: block;
    margin: auto;
  }

  &:hover{
    background-color: ${props => props.theme.colors.background.lightblue};
    color: ${props => props.theme.colors.text.darkblue};
  }

  &.center{
    margin: 0 auto;
  }

  &.white{
    background-color: ${props => props.theme.colors.background.lightgray};
    color: ${props => props.theme.colors.text.darkblue};

    &:hover{
      background-color: ${props => props.theme.colors.background.darkblue};
      color: ${props => props.theme.colors.text.lightgray};
    }

  }
`
