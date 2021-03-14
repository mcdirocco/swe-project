import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import "./MemberData.css";

const MemData = () => {
    return (
      <div className="ClassNameBigDiv">
        <header className="HeaderClassName">
          Nick is now working on this page.
        </header>
          <Container>
              <Row>
                  <Col>
                      <Button variant="primary" className="btn btn-block">Members</Button>
                  </Col>
                  <Col>
                      <Button variant="primary" className="btn btn-block">Events</Button>
                  </Col>
              </Row>

          </Container>
      </div>
    );
  }

  export default MemData;


/*

<div style = {{textAlign: 'center', padding: 10}}>
                  <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
                  <br></br>
                  <h3>These are the important names:</h3>
              </div>







 */