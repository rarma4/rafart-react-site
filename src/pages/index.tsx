import Head from 'next/head'
import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'
import 'bootstrap/dist/css/bootstrap.css'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sobre from '../components/Sobre'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>RafArt – Developer and WebDesign</title>
      </Head>
      <Menu />
      <Header />
      <Sobre />
      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      <Footer />
    </Container>
  )
}

export default Home
