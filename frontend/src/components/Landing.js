import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Landing.css";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { attendEvent, getUser } from "../API";

const localizer = momentLocalizer(moment);
let code;
let eventVar = {
    id: "",
};

async function submitFunc(e) {
    e.preventDefault();
    //place the PUT request here
    if(code === undefined) {
        return;
    }
    let token = await localStorage.getItem("token");
    let user = await getUser(token);
    console.log(token, eventVar.id, code);

    await attendEvent(token, eventVar.id, code);
    alert('Event attended!');

    //do the attend event functions
    //then push it to server
}

function Event({ event }) {
    let popoverClickRootClose = (
        <Popover id="popover-trigger-click-root-close" style={{ zIndex: 10000 }}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In Here</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={submitFunc}>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Enter Event Code Here!</Form.Label>
                            <Form.Control
                                type="String"
                                onChange={(e) => {code = e.target.value}}
                            />
                        </Form.Group>
                        <Button variant="secondary">Close</Button>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*    */}
                {/*</Modal.Footer>*/}
            </Modal.Dialog>
        </Popover>
    );

    eventVar = event;
    return (
        <div>
            <div>
                <OverlayTrigger
                    id="help"
                    trigger="click"
                    rootClose
                    container={this}
                    placement="bottom"
                    overlay={popoverClickRootClose}
                >
                    <div>{event.title}</div>
                </OverlayTrigger>
            </div>
        </div>
    );
}

class Landing extends Component {
    //add the events from DB in here
    state = {
        seen: false,
        events: [
            {
                id: String,
                title: String,
                start: Date,
                end: Date,
            },
        ],
        loaded: false,
    };

    async componentDidMount() {
        const response = await fetch("http://www.maxdirocco.com/events");
        const data = await response.json();
        console.log(data);
        // let token = localStorage.getItem("Token");
        // if (token === null) {
        //     localStorage.setItem("name", "Guest");
        // }
        for (let i = 0; i < data.length; i++) {
            this.state.events[i] = {};
            let dateObj = new Date(data[i].date);
            console.log(dateObj);
            let year = dateObj.getFullYear();
            let month = dateObj.getMonth();
            let day = dateObj.getDate() + 1;
            this.state.events[i].start = new Date(year, month, day);
            this.state.events[i].end = new Date(year, month, day);
            this.state.events[i].title = data[i].title;
            this.state.events[i].attendees = data[i].attendees;
            this.state.events[i].id = data[i]._id;
            console.log(this.state.events[i].id);
        }
        await this.setState({ loaded: true });
    }

    render() {
        if (!this.state.loaded) {
            return (
                <div className="App">
                    <Container fluid>
                        <h1 style={{ height: "100vh", color: "white" }}>Loading...</h1>
                    </Container>
                </div>
            );
        }
        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <div>
                                <Calendar
                                    localizer={localizer}
                                    defaultDate={new Date()}
                                    defaultView="month"
                                    events={this.state.events}
                                    style={{
                                        display: "flex",
                                        margin: "3vh",
                                        padding: "2vh",
                                        borderRadius: "2vh",
                                        height: "100vh",
                                        backgroundColor: "#EEEEEE",
                                    }}
                                    components={{
                                        event: Event,
                                    }}
                                />
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="buttonCol">
                                <Button
                                    className="CreateEventButton"
                                    href="/CreateEvent"
                                    color="primary"
                                >
                                    Create an Event
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Landing;
