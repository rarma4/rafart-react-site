import Link from 'next/link'
import { Container } from '../styles/components/Sobre-css'
import React, { useState } from 'react'
import Image from "next/image"
import { Col, Row } from 'react-bootstrap'
import Progress from './Progress'
import { Button } from '../styles/components/Button-css'
import { Formacao } from 'src/utils/Utils'

// interface Menu{
//   isVisible: boolean
// }

const Sobre: React.FC = () => {

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
              {Formacao.map((item, index) =>(
                <div key={index}>
                  <ul key={index}>
                    <li>{item.nome}</li>
                  </ul>
                </div>
              ))}
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
