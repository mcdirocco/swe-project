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
const localizer = momentLocalizer(moment);
let code;

function submitFunc(code){
 //place the PUT request here
 console.log(code)
}

function Event({ event }) {
  let popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" style={{ zIndex: 10000 }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Sign In Here</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit = {submitFunc(code)}>
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
  onSignIn = async (e) => {
    e.preventDefault();
    console.log(e)
    //this.setState({start: dateIn})
    let res = await fetch(
      'http://www.maxdirocco.com/events/create',
      {
        credentials: 'omit',
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json;charset=UTF-8',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
        },
        referrerPolicy: 'no-referrer-when-downgrade',
        body: JSON.stringify(this.state),
        method: 'POST', //change to post and add body to add an event
        mode: 'cors',
      },
    );
    res = await res.json();  
    console.log(res);
  }


  //add the events from DB in here
  state = {
    seen: false,
    events: [
      {
          id: undefined,
          title: String,
          start: Date,
          end: Date,
      },
      {
          title: "Yay",
          start: new Date(2021, 2, 8),
          end: new Date(2021, 2, 9)
      }
      
    ]
  };

  
  async componentDidMount(){
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
      this.state.events[i].id = data._id;
      this.state.events[i].start = new Date(year, month, day);
      this.state.events[i].end = new Date(year, month, day);
      this.state.events[i].title = data[i].title
      console.log(this.state.events)
    }
}


  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col md={10}>
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
        <Col md={2} >
          <div className="buttonCol">
          <Button className='CreateEventButton' href='/CreateEvent' color="primary">Create an Event</Button>
          </div>
        </Col>
        </Row>
       </Container>
         
          
      </div>
            
    );
  }
}

export default Landing;
