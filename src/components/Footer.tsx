import Link from 'next/link'
import { Container } from '../styles/components/Footer-css'
import React, { useState } from 'react'
import Image from "next/image"
import Social from './Social'

// interface Menu{
//   isVisible: boolean
// }

const Footer: React.FC = () => {

  return (
    <Container>
      <div className="max-width">
        <Social />  
      </div>
    </Container>
  )
}

export default Footer
