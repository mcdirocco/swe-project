import { Container, Row, Col, Breadcrumb, Form } from "react-bootstrap";

const Login = () => {
    return (
      <div className="LoginClassName">
          <Container>
              <Form>
                  <Form.Group>
                      <Form.Label>Username/Email</Form.Label>
                      <Form.Control type="email" placeholder="GuysI'mActuallyDoingIt" />
                      <Form.Text className="text-muted" >
                          We have your feetprints ;-;
                      </Form.Text>
                  </Form.Group>
              </Form>
              <Row className="TopLoginRow">
                  <Col className="LeftLoginCol">
                      <p style={{color: "orange"}}>Login Component</p>

                  </Col>
                  <Col className="RightLoginCol">
                      <p style={{color: "blue"}}>Sign Up Component</p>
                  </Col>
              </Row>
              <Breadcrumb className="justify-content-center">
                  <Breadcrumb.Item>Test</Breadcrumb.Item>
              </Breadcrumb>
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
