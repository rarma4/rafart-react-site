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
          <Col md={6} xd={12}>
           1
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
