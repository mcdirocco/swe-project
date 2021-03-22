import './CreateEvent.css'
import React from 'react'; 
import Form from 'react-bootstrap/Form' 
import {Button} from 'react-bootstrap'
import moment from "moment";

class Popup extends React.Component {  

  state = {
    title: "Title",
    description: "Description",
    date: undefined,
    end: undefined,
    startTime: undefined,
    endTime: undefined,
    password: "1234"
  };
//GENERATE RANDOM CODE TO BE DISPLAYED
onSubmit = async (e) => {
  console.log("feet")
  console.log(this.state.start)
  var dateIn = moment(this.state.start);
  this.setState({start: dateIn})
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

  render() {  
    return (  
      <div class="container">
        <div class="row test">
          <div class="col-md-4 offset-md-4 design">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" value={this.state.title} onChange={e => this.setState({title: e.target.value})} />
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Start Time</Form.Label>
        <Form.Control type="time" value={this.state.startTime} onChange={e => this.setState({startTime: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>End Time</Form.Label>
        <Form.Control type="time" value={this.state.endTime} onChange={e => this.setState({endTime: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>password</Form.Label>
        <Form.Control type="string" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
      </div>
      </div>
    );  
}  
}  

export default Popup;