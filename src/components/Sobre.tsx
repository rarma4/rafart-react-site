import Link from 'next/link'
import { Container } from '../styles/components/Sobre-css'
import React, { useState } from 'react'
import Image from "next/image"
import { Col, Row } from 'react-bootstrap'
import { Button } from '~/styles/components/Button-css'
import Progress from './Progress'

// interface Menu{
//   isVisible: boolean
// }

const Sobre: React.FC = () => {

  const cadastros = [
  {
    "id": 1,
    "nome": "Francisca Julia da Costa",
    "cpf": "457.696.936-65",
    "rg": "47.360.897-2",
    "data_nasc": "23/03/1944",
    "sexo": "Feminino"
  },
  {
    "id": 2,
    "nome": "Noah Felipe Silva",
    "cpf": "956.531.431-70",
    "rg": "40.974.782-8",
    "data_nasc": "11/07/1964",
    "sexo": "Masculino"
  },
  {
    "id": 3,
    "nome": "Alícia Rosângela Melo",
    "cpf": "066.291.353-18",
    "rg": "36.214.141-1",
    "data_nasc": "18/02/1978",
    "sexo": "Feminino"
  }
]
Object.keys(cadastros).forEach(function(item){
  console.log(item + " - " + cadastros[item])
})

  return (
    <Container>
      <div className="max-width">
        <div className="title">
          <h2>Sobre Mim</h2>
        </div>
        <Row>
          <Col md={6} xd={12} className="queSou">
            <h3>Quem sou eu?</h3>
            <p>Bacharel em Sistemas de Informação, conhecimentos em PHP, Javascript, Python, HTML, CSS, Bootstrap, WordPress, SQL, React. </p>
            <p>Conhecimento em Web Design, Designer Gráfico, com especialidade em desenvolvimento de sites institucionais, blogs, portais corporativos, lojas virtuais, landing pages e catálogos online para empresas e/ou profissionais liberais.</p>
            <p> Criação de identidades visuais para empresas, logomarcas, cartões de visita, banners e peças gráficas para campanhas publicitárias</p>
            <Button width="200px" className='white'>Download CV</Button>
          </Col>
          <Col md={6} xd={12} className="habilidades">
          <h3>Habilidades</h3>
          <Progress progresso={95} habilidade="WordPress" />
          <Progress progresso={100} habilidade="Html" />
          <Progress progresso={95} habilidade="CSS - SCSS" />
          <Progress progresso={75} habilidade="Javascript" />
          <Progress progresso={80} habilidade="PHP" />
          <Progress progresso={65} habilidade="React" />
          </Col>
        </Row>
        <Row>
          <Col md={6} xd={12} className="formacao">
            <h3>Formação</h3>
            <Row className='line'>
              <Col md={4} xd={4}>
              <p>Anhanguera Educacional</p>
              <p>2015 - 2018</p>
              </Col>
              <Col md={8} xd={8}>
                <p>Bacharel em Sistemas de Informação, conhecimentos em PHP, Javascript, Python, HTML, CSS, Bootstrap, WordPress, SQL, React. </p>
              </Col>
            </Row>
          </Col>
          <Col md={6} xd={12} className="experiencia">
          <h3>Experiência</h3>
            <Row className='line'>
              <Col md={4} xd={4}>
              
              </Col>
              <Col md={8} xd={8}>
                <p>Bacharel em Sistemas de Informação, conhecimentos em PHP, Javascript, Python, HTML, CSS, Bootstrap, WordPress, SQL, React. </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Sobre
