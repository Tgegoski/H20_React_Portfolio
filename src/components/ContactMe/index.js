import React from "react";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
// import { useStoreContext } from "../utils/GlobalState";
import Contact from "../components/ContactMe";

const ContactMe = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Contact Me />
        </Col>
        <Col size="md-6 sm-12">
          <ContactMe />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;


