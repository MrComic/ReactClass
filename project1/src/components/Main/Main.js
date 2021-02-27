import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../Header/Header";
import { Routing } from "../Routing/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCardProvider } from "../contexts/ShoppingCardContext";
export function Main(props) {
  return (
    <Router>
      <ShoppingCardProvider>
        <Header />

        <Container className="mt-3">
          <Routing />
        </Container>
      </ShoppingCardProvider>
    </Router>
  );
}
