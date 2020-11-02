import React, { Component } from "react";
import { Form, Badge, Button } from "react-bootstrap";
import { withFormik } from "formik";
import * as Yup from "yup";

class FormContact extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Nom</Form.Label>{" "}
          <Badge variant="danger">(min 3 caractères)</Badge>
          <Form.Control
            type="text"
            placeholder="votre nom"
            name="name"
            onChange={this.props.handleChange}
            value={this.props.values.name}
            onBlur={this.props.handleBlur}
          />
          {this.props.touched.name && this.props.errors.name && <span className="text-danger">{this.props.errors.name}</span>}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            onChange={this.props.handleChange}
            value={this.props.values.email}
            onBlur={this.props.handleBlur}
          />
          {this.props.touched.email && this.props.errors.email && <span className="text-danger">{this.props.errors.email}</span>}
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label>Message</Form.Label>{" "}
          <Badge variant="danger">(min 20 caractères)</Badge>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            onChange={this.props.handleChange}
            value={this.props.values.message}
            onBlur={this.props.handleBlur}
          />
          {this.props.touched.message && this.props.errors.message && <span className="text-danger">{this.props.errors.message}</span>}
        </Form.Group>
        <Button variant="primary" onClick={this.props.handleSubmit}>
          Envoyer
        </Button>
      </Form>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Le nom doit faire au minimum 3 caractères")
      .required("Veuillez indiquer une valeur"),
    email: Yup.string()
      .email("Veuillez indiquer un format valide!")
      .required("Veuillez indiquer une valeur"),
    message: Yup.string()
      .min(20, "Votre message doit faire au minimum 20 caractères")
      .max(2000, "Votre message doit faire au maximum 2000 caractères")
      .required("Veuillez indiquer une valeur"),
  }),
  handleSubmit: (values, { props }) => {
    alert("Message envoyé");
  },
})(FormContact);
