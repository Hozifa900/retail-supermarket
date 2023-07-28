import React from "react";
import Header from "../../components/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, DropdownButton, Dropdown } from "react-bootstrap";
import "./Suppliers.css";

export default function Suppliers() {
  const [data, setData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const getSuppliers = (id) => {
    axios
      .get("http://localhost:8080/api/products/" + id)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/suppliers")
      .then((response) => {
        setSupplier(response.data);
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
              <DropdownButton
                id="dropdown-basic-button"
                title="Select a Supplier"
              >
                {supplier.map((item, index) => (
                  <Dropdown.Item
                    href={`#${item.supplierId}`}
                    onClick={() => getSuppliers(item.supplierId)}
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
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
