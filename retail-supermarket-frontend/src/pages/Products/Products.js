import React from "react";
import Header from "../../components/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Products.css";

export default function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      });
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="product-header">
              <h3 className="product-header-left">List of Products in stock</h3>
              <Button variant="outline-info">Add a New Product</Button>
            </div>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Number</th>
                  <th>Name</th>
                  <th>Unit Price</th>
                  <th>Qty in Stock</th>
                  <th>Supplier</th>
                  <th>Date Supplied</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{100000000 + index}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.quantityInStock}</td>
                    <td>{item.supplerName}</td>

                    <td>{item.dateSupplied.substring(0, 10)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
