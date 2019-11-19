import React, { Component } from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container,
  Row,
  Col
} from "reactstrap";


class Navbarr extends Component{
    constructor(){
        super();
        this.state={
            isOpen:false
        }
    }
   toggle = () => {
       this.setState({
           isOpen:!this.state.isOpen
       })
   }
    render(){
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarBrand className="navbarbrand" href="/">
          Navigation
        </NavbarBrand>
        <NavbarToggler className="text-white" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto text-white" navbar>
            <NavItem>
              <NavLink className="text-white" href="/">
                PSD WEBSITES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/">
                UI KITS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/psdfiles">
                PREMIUM PSD FILES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/album">
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/blog">
                BLOG
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Jumbotron className="bg-info jumbotranradius">
        <Container>
          <Row>
            <Col>
              {" "}
              <p style={{ fontSize: "7vw", fontWeight: "500" }}>
                Awesome Free PSD templates & Resources
              </p>
            </Col>
          </Row>
          <Row className="rowwrap">
            <Col lg="9">
              <p
                style={{
                  color: "lightgray",
                  fontWeight: "300",
                  fontSize: "3vw"
                }}
                className="lead"
              >
                www.BlazRobar.com
              </p>
            </Col>
            <Col lg="3">
              <p
                style={{ fontSize: "3vw", fontWeight: "700" }}
                className="lead"
              >
                {" "}
                >
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
     
    </div>
  );
    }
}

export default Navbarr;
