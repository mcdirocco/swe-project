import './CreateEvent.css';
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import { createEvent } from "../../API";

class Popup extends React.Component {

  state = {
    title: "poop",
    description: "feet",
    date: Date.now(),
    startTime: undefined,
    endTime: undefined
  };

onSubmit = async (e) => {
  e.preventDefault();
  let res = await createEvent(
      this.state.title,
      this.state.description,
      this.state.date,
      this.state.startTime,
      this.state.endTime
  );
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
