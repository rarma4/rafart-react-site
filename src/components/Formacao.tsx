import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FormacaoLista } from '../utils/FormacaoList'


// interface Form{
//   FormacaoLista: any
// }

const Formacao: React.FC = () => {

  return (
  <>{
    Object.entries(FormacaoLista).forEach(([key, value]) => {
    
        console.log (key + value)
 
  })
}

</>


  )
}

export default Formacao
