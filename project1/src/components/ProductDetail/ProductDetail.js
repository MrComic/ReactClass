import React, { useContext, useEffect, useState } from "react";
import { Alert, Badge, Breadcrumb, Card, Col, Row } from "react-bootstrap";
import { renderIntoDocument } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../contexts/ShoppingCardContext";
import Products from "../Products/Products";

export default function ProductDetail(props) {
  const [ProductId, setProductId] = useState(props.match.params.id);
  const [loading, setloading] = useState(true);
  const [Product, setProduct] = useState(null);
  const [cards, setCards] = useContext(ShoppingCardContext);
  //console.log(props.match.params.id);
  useEffect(() => {
    setloading(true);
    setProductId(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ProductId}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      })
      .finally(() => {
        setloading(false);
      });
  }, [ProductId]);

  const AddToCard = (product) => {
    if (!cards.some((p) => p.id == product.id)) {
      setCards([...cards, product]);
    }
  };

  if (loading === false) {
    if (Product != null) {
      return (
        <>
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
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => AddToCard(Product)}
                  >
                    Add To Cart
                  </button>
                </Col>
              </Row>
              <h3>Similar Products:</h3>
              <hr />
              <Products except={Product.id} category={Product.category} />
            </Card.Body>
          </Card>
        </>
      );
    } else {
      return <Alert variant="danger">Product Removed Or Not Found</Alert>;
    }
  } else {
    return <div className="loader"></div>;
  }
}
