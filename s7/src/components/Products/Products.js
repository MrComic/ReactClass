import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import Product from "./Product/Product";

export default function Products(props) {
  const [Products, setProducts] = useState([]);
  const [minDescriptionLength, setminDescriptionLength] = useState(100);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        let tempArr = [];
        let minLength = json.reduce((item, item1) => {
          if (item.description.length < item1.description.length) return item;
          else return item1;
        }).description.length;
        setminDescriptionLength(minLength);
        while (json.length > 0) tempArr.push(json.splice(0, 4));
        setProducts(tempArr);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (Loading === false) {
    if (Products && Product.length > 0) {
      return Products.map((item, index) => {
        return (
          <Row key={index} className="mb-3">
            {item.map((cols) => {
              return (
                <Col lg={3} key={cols.id}>
                  <Product
                    item={cols}
                    descLength={minDescriptionLength}
                    key={cols.id}
                  />
                </Col>
              );
            })}
          </Row>
        );
      });
    } else {
      return <Alert variant="danger">nothing returned from server </Alert>;
    }
  } else {
    return <div className="loader"></div>;
  }
}
