import Link from 'next/link'
import { Container } from '../styles/components/Menu-css'
import React, { useState } from 'react'
import Image from "next/image"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ProgressElement } from '~/styles/components/Progress-css';

interface Progress{
  habilidade: string,
  progresso: number
}

const Progress: React.FC<Progress> = (props) => {
  const now = props.progresso;

  return (
    <ProgressElement>
      <label>{props.habilidade}</label>
      <ProgressBar now={now} label={`${now}%`} />
    </ProgressElement>
  )
}

export default Progress 
