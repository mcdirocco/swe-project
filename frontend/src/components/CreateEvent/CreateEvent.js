import "./CreateEvent.css";
import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import moment from "moment";
import {createEvent} from "../../API";

class Popup extends React.Component {
  state = {
    title: "New Event",
    description: "Event Description",
    date: undefined,
    end: undefined,
    startTime: undefined,
    endTime: undefined,
    password: "1234",
  };
  //GENERATE RANDOM CODE TO BE DISPLAYED
  onSubmit = async (e) => {
    e.preventDefault();
    console.log("feet");
    console.log(this.state.start);
    let dateIn = moment(this.state.start);
    await this.setState({ start: dateIn });
    let res = await createEvent(this.state.title, this.state.description, this.state.date,
                                this.state.startTime, this.state.endTime, this.state.password);
    console.log(res);
    //window.location.replace("Landing") trying to get the function to reroute
    alert('Event created!');
  };

  render() {
    return (
        <div style={{height: "100vh", marginTop: '1%'}}>
          <div className="container">
            <div className="row test">
              <div className="col-md-4 offset-md-4 design">
                <Form onSubmit={this.onSubmit}>
                  <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={(e) =>
                            this.setState({ description: e.target.value })
                        }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicDescription">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={this.state.date}
                        onChange={(e) => this.setState({ date: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicDescription">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                        type="time"
                        value={this.state.startTime}
                        onChange={(e) =>
                            this.setState({ startTime: e.target.value })
                        }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicDescription">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                        type="time"
                        value={this.state.endTime}
                        onChange={(e) => this.setState({ endTime: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicDescription">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type="string"
                        value={this.state.password}
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
    );
  }
}

export default Popup;
