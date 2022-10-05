import styled from 'styled-components'

export const Container = styled.div`
  font-size: 20px;
  background-color: #121a2f;
  width: 100%;
  padding: 20px 0;
  border-top: solid ${props => props.theme.colors.background.lightblue} 5px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  
  .max-width {
      max-width: 1300px;
      width: 100%;
      padding: 0 10px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: inherit;
    }
  
`
