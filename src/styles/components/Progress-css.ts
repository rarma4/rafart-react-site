import styled from 'styled-components'

export const ProgressElement = styled.div`

label{
  color: ${props => props.theme.colors.text.lightgray};
  padding: 20px 0 5px 0;
}
.progress{
  background: ${props => props.theme.colors.background.lightgray};
}
.progress-bar{
  background: ${props => props.theme.colors.background.lightblue};
  color: ${props => props.theme.colors.text.lightgray};
}

@media (max-width: 768px) {

}

`
