import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
export default function AddCartItems() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
    <Container className="py-5 h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12}>
          <Card className="card-registration card-registration-2" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-0">
              <Row className="g-0">
                <Col lg={8}>
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <p className="mb-0 text-muted">3 items</p>
                    </div>

                    <hr className="my-4" />

                    <Row className="mb-4 d-flex justify-content-between align-items-center">
                      <Col md={2} lg={2} xl={2}>
                        <Image
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                          fluid
                          rounded
                          alt="Cotton T-shirt"
                        />
                      </Col>
                      <Col md={3} lg={3} xl={3}>
                        <h6 className="text-muted">Shirt</h6>
                        <h6 className="text-black mb-0">Cotton T-shirt</h6>
                      </Col>
                      <Col md={3} lg={3} xl={3} className="d-flex align-items-center">
                        <Button variant="link" className="px-2">
                          -
                        </Button>
                        <Form.Control type="number" min="0" defaultValue={1} size="sm" />
                        <Button variant="link" className="px-2">
                          +
                        </Button>
                      </Col>
                      <Col md={3} lg={2} xl={2} className="text-end">
                        <h6 className="mb-0">€ 44.00</h6>
                      </Col>
                      <Col md={1} lg={1} xl={1} className="text-end">
                        <a href="#!" className="text-muted">
                          &times;
                        </a>
                      </Col>
                    </Row>

                    <hr className="my-4" />

                    {/* Repeat the similar structure for other items */}

                    <div className="pt-5">
                      <h6 className="mb-0">
                        <a href="#!" className="text-body">
                          &lt; Back to shop
                        </a>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="bg-grey">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">items 3</h5>
                      <h5>€ 132.00</h5>
                    </div>

                    <h5 className="text-uppercase mb-3">Shipping</h5>

                    <div className="mb-4 pb-2">
                      <Form.Select className="select p-2 rounded bg-grey" style={{ width: '100%' }}>
                        <option value="1">Standard-Delivery- €5.00</option>
                        {/* Add other shipping options */}
                      </Form.Select>
                    </div>

                    <h5 className="text-uppercase mb-3">Give code</h5>

                    <div className="mb-5">
                      <Form.Control size="lg" placeholder="Enter your code" />
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-5">
                      <h5 className="text-uppercase">Total price</h5>
                      <h5>€ 137.00</h5>
                    </div>

                    <Button variant="dark" block size="lg">
                      Register
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
  );
}
