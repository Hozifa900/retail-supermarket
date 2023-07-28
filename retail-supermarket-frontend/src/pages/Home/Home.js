import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h1 className="home-header">
              {" "}
              Welcome to the Supplier Relationship Management system (SRM)
            </h1>
            <p className="home-text">
              To create and manage <colored>Products</colored> and{" "}
              <colored>Suppliers</colored>, please first make sure to read the
              instructions and key points provided below. And then click the
              appropriate menu item, located on the menu-bar above. <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
