import React from 'react';
import Title from "../../components/UI/Title/Title"

const error404=(props)=>{
  return(
    <>
    <Title>Erreur 404!</Title>
    <p>La page demandée n'existe pas!</p>
    </>
  )
}

export default error404;