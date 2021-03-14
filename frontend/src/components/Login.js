import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import "./Login.css"

const Login = () => {
    return (
      <div className="LoginClassName">
          <Container>
              <Row className="TopLoginRow" xs={4}>
                  <Col className="LeftLoginCol" md={{span: 3, offset: 2}}>
                      <p style={{color: "white"}}>Login Component</p>
                      <Form>
                          <Form.Group>
                              <Form.Label>Username/Email</Form.Label>
                              <Form.Control type="email" placeholder="Username or Email" />
                              <Form.Text className="text-muted" >
                                  Space out the form.control units.
                              </Form.Text>
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                              <Form.Text>
                                  Put a border in the middle!
                              </Form.Text>
                              <Button variant="primary" className="btn btn-block">Login</Button>
                              <p className="forgot-password text-right">Forgot <a href="#">Password?</a></p>
                          </Form.Group>
                      </Form>
                  </Col>
                  <Col className="RightLoginCol" md={{span: 3, offset: 2}}>
                      <p style={{color: "white"}}>Sign Up Component</p>
                      <Form className="FormGroupRight">
                          <Form.Group>
                              <Form.Label>First Name</Form.Label>
                              <Form.Control type="formBasicText" placeholder="First Name"/>
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control type="formBasicText" placeholder="Last Name"/>
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="formBasicText" placeholder="Username" />
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email" />
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                              <Form.Label>Password Confirmation</Form.Label>
                              <Form.Control type="password" placeholder="Confirm Your Password" />
                              <Form.Label>Degree Major</Form.Label>
                              <Form.Control type="formBasicText" placeholder="Degree Major"/>
                              <Form.Label>Current Academic Year</Form.Label>
                              <Form.Control type="formBasicText" placeholder="Current Academic Year"/>
                              <Form.Text>
                                  Put a button below me!
                              </Form.Text>
                              <Button variant="primary" className="btn btn-block">Sign Up</Button>
                          </Form.Group>
                      </Form>
                  </Col>
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

  <Breadcrumb className="justify-content-end">
      <Breadcrumb.Item>Forgot Password?</Breadcrumb.Item>
  </Breadcrumb>











 */
