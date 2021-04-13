import React, {useState, useEffect} from "react";
import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import "./MemberData.css";
import {getUsers, getEvents} from "../API";

const MemData = () => {
    let [isLoading, setIsLoading] = useState(true);
    let [members, setMembers] = useState(undefined);
    let [user, setUser] = useState();
    let [events, setEvents] = useState();
    let [event, setEvent] = useState();
    let [membersOrEvents, setMembersOrEvents] = useState(true);

    useEffect(async () => {
        let users = await getUsers();
        let events = await getEvents();
        setMembers(users);
        setUser(users[0]);
        setEvents(events);
        setEvent(events[0]);
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

    //-------------------Nick's Stuff

    // const editSearchTerm = (e) => {
    //     this.setState({searchTerm: e.target.value})
    // }
    //
    // const dynamicSearch = () => {
    //     return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // }
    //
    // const render = () => {
    //     return (
    //         <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
    //             <input type = 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name'/>
    //             <br></br>
    //             <h3>These are names:</h3>
    //             <events event = {this.dynamicSearch()}/>
    //         </div>
    //     );
    // }

    //-------------------Pls help

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
                            onClick={() => setMembersOrEvents(true)}
                        >
                            Members
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant="primary"
                            className="btn btn-lg btn-dope"
                            aria-pressed="true"
                            onClick={() => setMembersOrEvents(false)}
                        >
                            Events
                        </Button>
                    </Col>
                </Row>
                <Row className="RowSplitPage">
                    <Col>
                        <Form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder={membersOrEvents ? "Search for Members:" : "Search for Events:"}
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
                                List of {membersOrEvents ? "Members" : "Events"}
                            </label>
                            <select
                                multiple
                                className="form-control"
                                id="exampleFormControlSelect2"
                            >
                                {membersOrEvents ?
                                    members.map(user => <option onClick={() => setUser(user)}>{user.lastname}, {user.firstname}</option>) :
                                    events.map(events => <option onClick={() => setEvent(events)}>{events.title}</option>)}
                            </select>
                        </div>
                        {/*</div>*/}
                    </Col>
                    <Col>
                        {/*<Form>*/}
                        {/*    This side is for all the available information allowed to see by different users*/}
                        {/*</Form>*/}
                        <div className="card">
                            <div className="card-header"> {membersOrEvents ? user.firstname + " " + user.lastname : "Events"} </div>
                            <div className="card-body">
                                <Row className="sizeTest">
                                    <Col>
                                        <h5 className="card-title" align="left">
                                            {membersOrEvents ?
                                                "Username:" :
                                                "EventName:"}

                                            <br />
                                            {membersOrEvents ?
                                                "Points:" :
                                                ""}
                                            <br />
                                            {membersOrEvents ?
                                                "Major:" :
                                                "Participants:"}
                                            <br />
                                            {membersOrEvents ?
                                                "Academic Year:" :
                                                ""}
                                        </h5>
                                    </Col>
                                    <Col>
                                        <h5 className="card-title" align="left">
                                            {membersOrEvents ?
                                                user.username :
                                                event.title }
                                            <br />
                                            {membersOrEvents ?
                                                user.points :
                                                ""}
                                            <br />
                                            {membersOrEvents ?
                                                user.major :
                                                event.participants}
                                            <br />
                                            {membersOrEvents ?
                                                user.year :
                                                ""}
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
