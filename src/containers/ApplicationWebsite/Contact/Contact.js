import React, { Component } from "react";
import Title from "../../../components/UI/Title/Title";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";
import FormContact from "./FormContact/FormContact";

class Contact extends Component {
  render() {
    return (
      <>
        <Title>Contactez-nous!</Title>
        <section>
          <div id="address" className="p-2 text-center">
            <h4>Adresse:</h4>
            <p>30 Bis Avenue de Ceinture, 95880 Enghien-les-Bains</p>
          </div>
          <div id="tel" className="p-2 text-center">
            <h4>Téléphone:</h4>
            <p>01.40.20.90.90</p>
          </div>
          <div id="formCtc" className="p-5">
            <h4>Ecrivez-nous directement:</h4>
            <LinkContainer to={this.props.match.path + "/formulaire"}>
              <Button variant="info">Aller au formulaire de contact</Button>
            </LinkContainer>
            <Route
              path={this.props.match.path + "/formulaire"}
              render={() => <FormContact />}
            />
          </div>
        </section>
      </>
    );
  }
}
export default Contact;
