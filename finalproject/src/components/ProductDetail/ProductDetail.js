import React, { useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Breadcrumb,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from "react-router-dom";

export default function ProductDetail(props) {
  const [ProductId, setProductId] = useState(props.match.params.id);
  const [loading, setloading] = useState(true);
  const [Product, setProduct] = useState(null);
  useEffect(() => {
    if (ProductId) {
      fetch(`https://fakestoreapi.com/products/${ProductId}`)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        })
        .finally(() => {
          setloading(false);
        });
    }
  }, []);

  if (loading === false) {
    if (Product != null) {
      return (
        <Container className="mt-5">
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Products</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{Product.title}</Breadcrumb.Item>
            </Breadcrumb>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg="6">
                    <img
                      alt={Product.title}
                      className="w-100 h-75"
                      src={Product.image}
                    />
                  </Col>
                  <Col>
                    <h1>{Product.title}</h1>
                    <hr />
                    <Badge variant="secondary">{Product.category}</Badge>
                    <p>
                      <em>$ {Product.price}</em>
                    </p>
                    <p>{Product.description}</p>
                    <button className="btn btn-primary btn-block">
                      Add To Cart
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      );
    } else {
      return <Alert variant="danger">Product Removed Or Not Found</Alert>;
    }
  } else {
    return <div className="loader"></div>;
  }
}
