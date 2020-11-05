import React, { Component } from "react";
import Title from "../../../components/UI/Title/Title";
import HomeImage from "../../../assets/images/chateau.jpg";
import { Alert, Image} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Title>Bienvenue sur le site du département du Val-d'Oise</Title>
        <Alert variant="info" className="text-center">
          Le site qui vous aide à trouver les établissements publics
          du Val d'Oise.
        </Alert>
        <Image src={HomeImage} fluid style={{width:"100%"}} thumbnail/>
      </div>
    );
  }
}
export default Home;
