import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../Header/Header";
import { Routing } from "../Routing/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
export function Main(props) {
  return (
    <Router>
      <Header />
      <Container className="mt-3">
        <Routing />
      </Container>
    </Router>
  );
}
