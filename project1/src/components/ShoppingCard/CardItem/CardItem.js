import React, { useContext, useState } from "react";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../../contexts/ShoppingCardContext";

export default function CardItem(props) {
  const [Product, setProduct] = useState(props.item);
  const [cards, setCards] = useContext(ShoppingCardContext);
  const removeFromCard = (id) => {
    var index = cards.findIndex((p) => p.id == id);
    if (index > -1) {
      cards.splice(index, 1);
      setCards([...cards]);
    }
  };

  return (
    <Row className="mt-5">
      <Col lg={2}>
        <img alt={Product.title} src={Product.image} height="100" />
      </Col>
      <Col lg={6} className="d-flex flex-column justify-content">
        <h4>
          <Link to={"/product/" + Product.id}>{Product.title}</Link>
        </h4>
        <small>${Product.price}</small>
      </Col>
      <Col
        lg={3}
        className="d-flex flex-column justify-content align-self-center"
      >
        <Button
          variant="danger"
          onClick={() => {
            removeFromCard(Product.id);
          }}
        >
          Remove
        </Button>
      </Col>
    </Row>
  );
}
/* <Card>
      <Card.Img variant="top" src={Product.image} height="300" />
      <Card.Body>
        <Card.Title className={styles.title}>{Product.title}</Card.Title>
        <Card.Text>
          {Product.description.length > props.descLength
            ? Product.description.substring(0, props.descLength) + "..."
            : Product.description}
        </Card.Text>
        <Link
          to={"/product/" + Product.id}
          className="btn btn-primary btn-block"
        >
          Details
        </Link>
      </Card.Body>
    </Card> */
