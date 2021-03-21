import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import "./MemberData.css";

const MemData = () => {
    return (
      <div className="ClassNameBigDiv">
        <header className="HeaderClassName" >
          Active Members
        </header>
          <Container>
              <Row className="RowButtons">
                  <Col>
                      <Button variant="primary" className="btn btn-sm">Members</Button>
                  </Col>
                  <Col>
                      <Button variant="primary" className="btn btn-sm" aria-pressed="true">Events</Button>
                  </Col>
              </Row>
              <Row className="RowSplitPage">
                  <Col>
                    <Form>
                        This side is for the search bar, Scroll wheel, and Member mini-preview/title tags
                    </Form>
                      <Form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </Form>
                      <div className="form-group">
                          <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                          <select multiple className="form-control" id="exampleFormControlSelect2">
                              <option>1</option>
                              <option>Need a way to add in a member automatically once they make an account</option>
                              <option>3</option>
                              <option>Will we sort this alphabetically or by membership, points, attendance, or have ways to sort it?</option>
                              <option>4</option>
                          </select>
                      </div>
                  </Col>
                  <Col>
                    <Form>
                        This side is for all the available information allowed to see by different users
                    </Form>
                      <div className="card">
                          <div className="card-header">
                              Member's First and Last name
                          </div>
                          <div className="card-body">
                              <h5 className="card-title" align="left">Username: <br /> Points: <br /> Tier Level: <br /> Attendance Level: </h5>
                              <p className="card-text">Show personal biography here? Large area for information.</p>
                          </div>
                      </div>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Export to CSV</button>
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