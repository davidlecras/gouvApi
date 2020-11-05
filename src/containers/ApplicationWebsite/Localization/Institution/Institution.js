import React from "react";
import { Card } from "react-bootstrap";
import Timetable from "../Timetable/Timetable"

const institution = (props) => {
  return (
    <div className="p-2">
    <Card className="text-center">
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>
        Téléphone: {props.telephone}<br/>
        {props.email && `E-mail: ${props.email}`}</Card.Title>
        <Card.Text>
        <strong>Adresse:</strong><br/>
        {props.address[0].lignes[0]} {props.address[0].codePostal} {props.address[0].commune}<br/>
        {props.times && <><strong>Horaires: (sous réserve de modification)</strong><br/>
        <Timetable times={props.times}/> </>}
        {props.url && <a href={props.url}  className="btn btn-success" target="_blank" rel="noreferrer">Aller au site</a>}

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default institution;
