import './CreateEvent.css'
import React from 'react'; 
import Form from 'react-bootstrap/Form' 
import {Button} from 'react-bootstrap'

class Popup extends React.Component {  

  state = {
    title: "poop",
    description: "feet",
    date: undefined,
    startTime: undefined,
    endTime: undefined
  };

onSubmit = async (e) => {
  e.preventDefault();
  console.log("feet")
  let res = await fetch(
    'http://66.231.152.109:3001/events/create',
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
      method: 'POST',
      mode: 'cors',
    },
  );
  res = await res.json();  
  console.log(res);
}

  render() {  
    return (  
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
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    );  
}  
}  

export default Popup;