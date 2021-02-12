import React, { useState } from "react";
import { Button, Col, Form, Row, Modal } from "react-bootstrap";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    _replyto: "",
    message: "",
  });

  const [modalShow, setmodalShow] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    fetch("https://formspree.io/f/xqkgjoey", {
      method: "post",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json;" },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.ok == true) {
          setmodalShow(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  return (
    <>
      <Modal show={modalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>your Data Submitted Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setmodalShow(false)}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>

      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <label>Name:</label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>family name:</label>
            <Form.Control
              type="text"
              name="family"
              value={formData.family}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>email:</label>
            <Form.Control
              type="text"
              name="_replyto"
              value={formData._replyto}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>message:</label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Button variant="success" type="submit">
              submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
}

export default Contact;
