import React, { useContext, useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Product from "./Product/Product";
import HttpRequest from "../../Interceptors/AxiosInstance";
import Paging from "./Paging/Paging";
import styles from "./Products.module.css";

import { AuthContext } from "../../Contexts/AuthContext";
import { useHistory, useLocation } from "react-router";

export default function Products(props) {
  const [Products, setProducts] = useState([]);
  const [minDescriptionLength, setminDescriptionLength] = useState(100);
  const [Loading, setLoading] = useState(true);
  const [paging, setpaging] = useState({
    page: 1,
    pageSize: 4,
    total: 0,
    currentData: [],
  });

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/login" } };
  const [token, settoken] = useContext(AuthContext);

  const handleCLick = (item) => {
    console.log((item - 1) * paging.pageSize, item * paging.pageSize);
    let sliced = Products.slice(
      (item - 1) * paging.pageSize,
      item * paging.pageSize
    );
    console.log(Products);
    console.log(sliced);
    setpaging({
      ...paging,
      currentData: Products.slice(
        (item - 1) * paging.pageSize,
        item * paging.pageSize
      ),
    });
  };

  const Logout = () => {
    localStorage.removeItem("token");
    settoken(null);
    history.replace(from);
  };

  useEffect(() => {
    HttpRequest("https://fakestoreapi.com/products")
      //.then((res) => res.json())
      .then((res) => {
        let json = res.data;
        let tempArr = [];
        setpaging({
          ...paging,
          total: json.length - 1,
          currentData: json.slice(0, paging.page * paging.pageSize),
        });
        setProducts(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (Loading === false) {
    if (paging.currentData && paging.currentData.length > 0) {
      return (
        <Container className={["mt-5"].join(" ")}>
          <Row>
            <Col className="text-right">
              <button className="btn btn-danger mb-4" onClick={Logout}>
                logout
              </button>
            </Col>
          </Row>
          <Row>
            {paging.currentData.map((item, index) => {
              return (
                <Col lg={3} key={item.id}>
                  <Product item={item} descLength={minDescriptionLength} />
                </Col>
              );
            })}
          </Row>
          <Row className={[styles.HCenterd, "mt-5"].join(" ")}>
            <Paging HandleCLick={handleCLick} data={paging} />
          </Row>
        </Container>
      );
    } else {
      return <Alert variant="danger">nothing returned from server </Alert>;
    }
  } else {
    return <div className="loader"></div>;
  }
}
