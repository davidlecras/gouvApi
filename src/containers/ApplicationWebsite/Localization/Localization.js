import React, { Component } from "react";
import axios from "axios";
import Title from "../../../components/UI/Title/Title";
import { Button, Col, Row } from "react-bootstrap";
import Institution from "./Institution/Institution";

class Localization extends Component {
  state = {
    search: null,
  };

  searchInstitution = (types) => {
    axios
      .get(
        `https://etablissements-publics.api.gouv.fr/v3/departements/95/${types}`
      )
      .then((response) => {
        this.setState({ search: response.data.features });
      });
  };
  render() {
    return (
      <>
        <Title>Rechercher un établissement public</Title>
        <div className="d-flex justify-content-center flex-wrap">
          <Button
            variant="dark"
            onClick={() => this.searchInstitution("mairie")}
          >
            Mairies
          </Button>
          <Button
            variant="dark"
            onClick={() => this.searchInstitution("prefecture")}
          >
            Préfecture
          </Button>
          <Button
            variant="dark"
            onClick={() => this.searchInstitution("commissariat_police")}
          >
            Commissariat de police
          </Button>
          <Button
            variant="dark"
            onClick={() => this.searchInstitution("tresorerie")}
          >
            Trésoreries
          </Button>
          <Button
            variant="dark"
            onClick={() => this.searchInstitution("pole_emploi")}
          >
            Pole Emploi
          </Button>
        </div>
        <Row>
        {this.state.search &&
          this.state.search.map(institution => {
            return (
              <Col md={6} key={institution.properties.id}>
              <Institution
                address={institution.properties.adresses}
                name={institution.properties.nom}
                times={institution.properties.horaires}
                id={institution.properties.id}
                telephone={institution.properties.telephone}
                url={institution.properties.url}
                email={institution.properties.email}
              />
              </Col>
            );
          })}
          </Row>
        {!this.state.search &&<p className="text-center p-5">
          Cliquez sur un des boutons pour commencer
        </p>}
      </>
    );
  }
}
export default Localization;