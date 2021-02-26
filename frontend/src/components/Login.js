//Am I supposed to import bootstrap here so that I can use container, row, and col?
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
    return (
      <div className="LoginClassName">

          <Container>

              <Row>
                  <Col>Login Component</Col>
                  <Col>Sign Up Component</Col>
              </Row>
          </Container>
      </div>
    );
  }

  export default Login;

/*
  <header className="App-header">
      Login Comp | Signup Comp
      <h2 >I now know why I am purple @App.css </h2>
  </header>













 */