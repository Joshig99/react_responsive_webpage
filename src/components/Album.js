import React, { Component } from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import "./Album.css";

class Album extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="album">
          <Col xs="12" sm="12" md="4" className="albumimg">
              <p style={{ color: "lightgray",fontSize: "3vw", fontWeight: "700" }} className="banner3">
            {" "}
            >
          </p>
          </Col>
          <Col  xs="12" sm="12" md="4"className="albumimg img-responsive">
            <img
              src="/images/Golden-Gate-Bridge-San-Francisco.jpg"
              width="100%" style={{objectFit:"cover",borderRadius:"0"}} className="img-responsive imgres"/>
            
          </Col>
          <Col  xs="12" sm="12" md="4" className="albumimg img-responsive"> 
            <img
              src="/images/istockphoto.jpg"
              width="100%"style={{borderRadius:"0"}} className="img-responsive imgres"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Album;
