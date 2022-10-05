import Link from 'next/link'
import { Container } from '../styles/components/Header-css'
import React, { useState } from 'react'
import Image from "next/image"
import { Col, Row } from 'react-bootstrap'

// interface Menu{
//   isVisible: boolean
// }

const Menu: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const handleChange = () => {
    setMenuIsVisible(!menuIsVisible)
  }

  return (
    <Container>
      <div className="max-width">
        <Row>
          <Col md={6} xd={12}>
            <h1>Sempre olhando para construir algo novo</h1>
            <p>Apaixonado por tecnologia e inovação busco oferecer, soluções práticas e eficazes que trarão ótimos resultados.</p>
            <button>Saba Mais</button>
          </Col>
          <Col md={6} xd={12}>
            <div className='imgDeveloper'>
              <Image src="/img/developer02p.png" width={500} height={400} />
            </div>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Menu
