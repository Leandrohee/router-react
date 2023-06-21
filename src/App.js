import {Outlet} from 'react-router-dom'                               //serve para deixar paginas em uma hierarquia abaixo da principal
import Nav from './components/nav/nav'
import styled from 'styled-components'
import GlobalStyle  from './components/globalStyle/globalstyle'       //Resetando as configuracoes globais


const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100VW;
  background-color: #DDE6ED;
`

export default function App() {
  return (
  <>
    <GlobalStyle/>
    <Main>
      <Nav></Nav>
      <Outlet/>
    </Main>
  </>
  )
}
