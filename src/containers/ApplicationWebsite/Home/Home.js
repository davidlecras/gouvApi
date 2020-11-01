import React, { Component } from "react";
import Title from "../../../components/UI/Title/Title";
import HomeImage from "../../../assets/images/chateau.jpg";
import { Alert, Image, Container} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Title>Bienvenue sur le site de la Région Île-de-France</Title>
        <Alert variant="info" className="text-center">
          Le site qui vous aide à trouver les établissements publics
          d'Île-deFrance
        </Alert>
        <Image src={HomeImage} fluid style={{width:"100%"}} thumbnail/>
      </Container>
    );
  }
}
export default Home;
