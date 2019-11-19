import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./Album.css";

class Footer extends Component {
  render() {
    return (
      <Jumbotron className="bg-dark jumb">
        <Container fluid>
          <Row>
            <Col xs="12">
               <p className="text-white d-flex justify-content-center">All Rights Reserved@2019 Designed by Joshi</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Footer;
