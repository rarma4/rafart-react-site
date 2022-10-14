import Link from 'next/link'
import { Container } from '../styles/components/Header-css'
import React, { useState } from 'react'
import Image from "next/image"
import { Col, Row } from 'react-bootstrap'
import { Button } from '~/styles/components/Button-css'

// interface Menu{
//   isVisible: boolean
// }

const Header: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const handleChange = () => {
    setMenuIsVisible(!menuIsVisible)
  }

  return (
    <Container>
      <div className="max-width">
        <Row>
          <Col md={6} xd={12}>
            <h1>Apaixonado por tecnologia e inovação</h1>
            <p>Busco oferecer, soluções práticas e eficazes que trarão ótimos resultados.</p>
            {/* <Button width="200px" className='white'>Saiba Mais</Button> */}
          </Col>
          <Col md={6} xd={12}>
            <div className='imgDeveloper'>
              {/* <img src="img/developer02p.png" /> */}
              <Image src="/img/developer02p.png" width={500} height={400} />
            </div>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Header
