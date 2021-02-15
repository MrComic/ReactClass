import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
export default function Product(props) {
  const [Product, setProduct] = useState(props.item);

  return (
    <Card>
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
    </Card>
  );
}
