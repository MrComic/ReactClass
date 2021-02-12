import { Tab } from "bootstrap";
import { Col, Container, Row, Tabs } from "react-bootstrap";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";
import Todo from "../Todo/Todo";

export default function Main(props) {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <Tabs
              className="mt-3"
              defaultActiveKey="Todo"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="Todo" title="Todo">
                <Todo />
              </Tab>
              <Tab eventKey="ContactUs" title="Contact Us">
                <Contact />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}
