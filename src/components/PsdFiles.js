import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./Navbar.css";


class PsdFiles extends Component {
  render() {
    return (
      <Jumbotron className="bg-dark jumb">
        <Container fluid>
          {" "}
          <Row className="rowwrap ">
            <Col className="p-0 " xs="9">
              <p
                style={{
                  color: "lightgray",
                  fontWeight: "300",
                  fontSize: "3vw"
                }}
                className=" lead rowsize banner1"
              >
                I'm like the Robin Hood of PSD files
              </p>
            </Col>
            <Col className="p-0 ">
              <p
                style={{
                  color: "lightgray",
                  fontSize: "3vw",
                  fontWeight: "700"
                }}
                className="rowsize banner2"
              >
                {" "}
                >
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default PsdFiles;
