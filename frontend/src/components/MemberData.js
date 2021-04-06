import React, {useState, useEffect} from "react";
import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import "./MemberData.css";
import {getUsers} from "../API";

const MemData = () => {
    let [isLoading, setIsLoading] = useState(true);
    let [members, setMembers] = useState(undefined);
    let [user, setUser] = useState();

    useEffect(async () => {
        let users = await getUsers();
        setMembers(users);
        setUser(users[0]);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className="App">
                <Container fluid>
                    <h1 style={{ height: "100vh", color: "white" }}>Loading...</h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="ClassNameBigDiv">
            <header className="HeaderClassName">Active Members</header>
            <Container>
                <Row className="RowButtons">
                    <Col>
                        <Button
                            variant="primary"
                            className="btn btn-lg btn-dope"
                            style={{ span: 3, offset: 5 }}
                        >
                            Members
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant="primary"
                            className="btn btn-lg btn-dope"
                            aria-pressed="true"
                        >
                            Events
                        </Button>
                    </Col>
                </Row>
                <Row className="RowSplitPage">
                    <Col>
                        {" "}
                        {/*style={{span: 6, offset: 4}}*/}
                        {/*<div className="card">*/}
                        {/*    <div className="card-header">*/}
                        {/*        <Form>*/}
                        {/*            This side is for the search bar, Scroll wheel, and Member mini-preview/title tags*/}
                        {/*        </Form>*/}
                        {/*    </div>*/}
                        <Form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </Form>
                        <br />
                        <div className="form-group">
                            <label
                                htmlFor="exampleFormControlSelect2"
                                style={{ color: "white" }}
                            >
                                List of MEMBERS / EVENTS
                            </label>
                            <select
                                multiple
                                className="form-control"
                                id="exampleFormControlSelect2"
                            >
                                {members.map(user => <option onClick={() => setUser(user)}>{user.lastname}, {user.firstname}</option>)}
                            </select>
                        </div>
                        {/*</div>*/}
                    </Col>
                    <Col>
                        {/*<Form>*/}
                        {/*    This side is for all the available information allowed to see by different users*/}
                        {/*</Form>*/}
                        <div className="card">
                            <div className="card-header">{user.firstname} {user.lastname}</div>
                            <div className="card-body">
                                <Row>
                                    <Col>
                                        <h5 className="card-title" align="left">
                                            Username:
                                            <br />
                                            Points:
                                            <br />
                                            Tier Level:
                                            <br />
                                            Attendance Level:
                                        </h5>
                                    </Col>
                                    <Col>
                                        <h5 className="card-title" align="left">
                                            {user.username}
                                            <br />
                                            {user.points}
                                            <br />
                                            don't worry emily
                                            <br />
                                            nothing embarassing will be here
                                        </h5>
                                    </Col>
                                </Row>
                                <p className="card-text">
                                    Show personal biography here? Large area for information.
                                </p>
                            </div>
                        </div>
                        <br />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Export to CSV
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MemData;

/*

<div style = {{textAlign: 'center', padding: 10}}>
                  <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
                  <br></br>
                  <h3>These are the important names:</h3>
              </div>







 */
