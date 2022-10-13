import React from 'react'
import Link from 'next/link'
import { Container } from '../styles/components/Social-css'

// interface Menu{
//   isVisible: boolean
// }

const Social: React.FC = () => {

  return (
    <Container>
      <Link href="https://www.facebook.com/rarma4/">
        <a target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
      </Link>
      <Link href="https://www.instagram.com/rarma4/">
        <a target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
      </Link>
      <Link href="https://github.com/rarma4">
        <a target="_blank"><i className="fa-brands fa-square-github"></i></a>
      </Link>
      <Link href="https://www.linkedin.com/in/rarma4/">
        <a target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      </Link>
      <Link href="https://api.whatsapp.com/send/?phone=5511999767629&text=Contato+pelo+site+Raf%27Art%3A&type=phone_number&app_absent=0">
        <a target="_blank"><i className="fa-brands fa-square-whatsapp"></i></a>
      </Link>
      <Link href="callto:5511999767629">
        <a target="_blank"><i className="fa-solid fa-square-phone"></i></a>
      </Link>
      {/* <i className="fa-brands fa-instagram"></i> */}
    </Container>
  )
}

export default Social
