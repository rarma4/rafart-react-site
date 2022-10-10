import Link from 'next/link'
import { Container } from '../styles/components/Sobre-css'
import React, { useState } from 'react'
import Image from "next/image"
import { Col, Row } from 'react-bootstrap'
import { Button } from '~/styles/components/Button-css'

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
          <Col md={6} xd={12}>
          2
          </Col>
        </Row>
        <Row>
          <Col md={6} xd={12}>
           3
          </Col>
          <Col md={6} xd={12}>
          4
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Sobre
