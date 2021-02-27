import React, { useEffect, useState } from "react";
import { Alert, Breadcrumb, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

export default function Products(props) {
  const [Products, setProducts] = useState([]);
  const [minDescriptionLength, setminDescriptionLength] = useState(100);
  const [Loading, setLoading] = useState(true);
  const [colsCount, setcolsCount] = useState(3);

  const RemoveProduct = (products, idToRemove) => {
    if (idToRemove) {
      return products.filter((p) => p.id != idToRemove);
    }
    return products;
  };

  const DevideProductsIntoChunks = (products, chunksCount) => {
    let tempArr = [];
    setcolsCount(chunksCount);
    let minLength = products.reduce((item, item1) => {
      if (item.description.length < item1.description.length) return item;
      else return item1;
    }).description.length;
    setminDescriptionLength(minLength);
    while (products.length > 0) tempArr.push(products.splice(0, chunksCount));
    setProducts(tempArr);
  };

  useEffect(() => {
    if (props.category) {
      fetch(
        `https://fakestoreapi.com/products/category/${props.category}?limit=5`
      )
        .then((res) => res.json())
        .then((json) => {
          DevideProductsIntoChunks(RemoveProduct(json, props.except), 3);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          DevideProductsIntoChunks(json, 3);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  let res;

  if (Loading === false) {
    if (Products && Product.length > 0) {
      res = Products.map((item, index) => {
        return (
          <Row key={index} className="mb-3">
            {item.map((cols) => {
              return (
                <Col lg={12 / colsCount} key={cols.id}>
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
      res = <Alert variant="danger">nothing returned from server </Alert>;
    }
  } else {
    res = <div className="loader"></div>;
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Products</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      {res}
    </>
  );
}
