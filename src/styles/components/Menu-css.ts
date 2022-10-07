import styled from 'styled-components'

export const Container = styled.div`
  font-size: 20px;
  background-color: #121a2f;
  width: 100%;
  z-index: 999;
  padding: 20px 0;
  border-bottom: solid ${props => props.theme.colors.background.lightblue} 5px;

  .navbar {
    .max-width {
      max-width: 1300px;
      width: 100%;
      padding: 0 10px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: inherit;
    }

    .menu {
      margin-top: 20px;
      li {
        list-style: none;
        display: inline-flex;

        a {
          display: block;
          margin-right: 25px;
          color: ${props => props.theme.colors.text.lightblue};
          text-decoration: none;

          :hover {
            color: ${props => props.theme.colors.text.lightgray};
          }
        }
      }
    }
  }

  .menu-btn {
    color: ${props => props.theme.colors.text.lightblue};
    font-size: 23px;
    cursor: pointer;
    display: none;
    :hover {
      color: ${props => props.theme.colors.text.lightgray};
    }
  }

  @media (max-width: 947px) {
    .menu-btn {
      display: block;
      z-index: 999;
    }

    .navbar {
      .max-width {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 930px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      .menu {
        background-color: #121a2f;
        position: fixed;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 0;
        text-align: center;
        padding-top: 80px;
        transition: all 0.5s ease;

        &.active {
          left: 0;
          z-index: 9;
        }

        li {
          display: block;

          a {
            display: inline-block;
            margin: 13px 0;
            font-size: 25px;
            text-decoration: none;          }
        }
      }
    }
  }
`
