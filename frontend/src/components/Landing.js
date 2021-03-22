import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CreateEvent from './CreateEvent/CreateEvent';
import './Landing.css';
import {Overlay} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { attendEvent, getUser } from '../API';
import { Redirect } from 'react-router-dom';
const localizer = momentLocalizer(moment);
let code;
let eventVar={
  id: ""
};

async function submitFunc(code, eventVar){
 //place the PUT request here
 let token = localStorage.getItem("Token");
 let user = await getUser(token);
 console.log(user)
 await attendEvent(token, user._id, code)
 
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
            <Form onSubmit = {submitFunc(code, eventVar)}>
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Enter Event Code Here!</Form.Label>
                  <Form.Control type="String" onChange={e => code = e.target.value}></Form.Control>
              </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Popover>
  );

  console.log(event);
  eventVar = event;
  return (
    <div>
      <div>
        <OverlayTrigger id="help" trigger="click" rootClose container={this} placement="bottom" overlay={popoverClickRootClose}>
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
      
      
    ]
  };

  
  async componentDidMount(){
    localStorage.setItem("name", "Emily")
    const response = await fetch('http://www.maxdirocco.com/events');
    const data = await response.json();
    console.log(data)
    for(var i=0; i < data.length; i++){
      this.state.events[i] = new Object();
      var dateObj = new Date(data[i].date);
      console.log(dateObj)
      var year = dateObj.getFullYear();
      var month = dateObj.getMonth();
      var day = dateObj.getDate() + 1;
      this.state.events[i].start = new Date(year, month, day);
      this.state.events[i].end = new Date(year, month, day);
      this.state.events[i].title = data[i].title;
      this.state.events[i].attendees = data[i].attendees;
      this.state.events[i].id = data[i]._id;
      console.log(this.state.events[i].id)
    }
}


  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col md={false ? 10 : 12}>
        <div>
        <Calendar
          localizer={localizer}
          defaultDate={new Date}
          defaultView="month"
          events={this.state.events}
          style={{ display: "flex", margin: "3vh", padding: "2vh", borderRadius: '2vh', height: "100vh", backgroundColor: "#EEEEEE"}}
          components={{
            event: Event
          }}
        />


        </div>
        </Col>
        {true && <Col md={2} >
          <div className="buttonCol">
            <Button className='CreateEventButton' href='/CreateEvent' color="primary">Create an Event</Button> 
          </div>
        </Col>}
        </Row>
       </Container>
         
          
      </div>
            
    );
  }
}

export default Landing;
