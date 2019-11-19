import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./Album.css";

class Blog extends Component {
  render() {
    return (
      <Jumbotron className="bg-muted jumb">
        <Container fluid>
          <Row>
            <Col xs="12">
                <Col xs="12">
              <p className="text-primary mt-2" style={{fontSize:'4vw',fontWeight:'500'}}>BlazRober.com</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="6">
              <Col xs="12">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, quisquam. Eum, commodi aliquid. Recusandae error ut
                  quo ipsum quidem obcaecati provident eligendi sed dolorum,
                  nihil, hic eum sunt veniam voluptate quas? Quibusdam quas
                  alias laborum tempore eius dicta quia eaque pariatur Error,
                  officiis? Animi dolores, eligendi nostrum suscipit veniam
                  eveniet rem, cum perspiciatis hic laborum deserunt voluptate
                  blanditiis numquam dolore voluptas porro repellendus?
                </p>
                <p>
                  aliquam exercitationem sunt nulla vero consequatur. Error,
                  officiis? Animi dolores, eligendi nostrum suscipit veniam
                  eveniet rem, cum perspiciatis hic laborum deserunt voluptate
                  blanditiis numquam dolore voluptas porro repellendus? Sed,
                  nisi.
                </p>
              </Col>
              {/* <Col xs="12"></Col> */}
            </Col>
            <Col xs="12" sm="12" md="6">
              <Col xs="12">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, quisquam. Eum, commodi aliquid. Recusandae error ut
                  quo ipsum quidem obcaecati provident eligendi sed dolorum,
                  nihil, hic eum sunt veniam voluptate quas? Quibusdam quas
                  alias laborum tempore eius dicta quia eaque pariatur Error,
                  officiis? Animi dolores, eligendi nostrum suscipit veniam
                  eveniet rem, cum perspiciatis hic laborum deserunt voluptate
                  blanditiis numquam dolore voluptas porro repellendus?
                </p>
                <p>
                  aliquam exercitationem sunt nulla vero consequatur. Error,
                  officiis? Animi dolores, eligendi nostrum suscipit veniam
                  eveniet rem, cum perspiciatis hic laborum deserunt voluptate
                  blanditiis numquam dolore voluptas porro repellendus? Sed,
                  nisi.
                </p>
              </Col>
              {/* <Col xs="12"></Col> */}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Blog;
