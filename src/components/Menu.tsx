import Link from 'next/link'
import { Container } from '../styles/components/Menu-css'
import React, { useState } from 'react'
import Image from "next/image"

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
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Link href="/">
              <img src="img/rafart-logo-full.png" />
            </Link>
            {/* <a href="/" ><Image src="/img/rafart-logo-full.png" width={120} height={40} /></a> */}
          </div>
          <ul className={`menu ${menuIsVisible ? "active" :  "" }`} id="myLinks">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
          <div className="menu-btn">
            <i className={`fas ${menuIsVisible ? "fa-times" : "fa-bars"}`} onClick={handleChange}></i>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Menu
