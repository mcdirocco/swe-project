import React, { Component } from 'react'

import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

class Landing extends Component {
  //add the events from DB in here
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  componentDidMount(){
    console.log(moment());
  }

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ display: "flex", margin: "3vh", padding: "2vh", borderRadius: '2vh', height: "100vh", backgroundColor: "#EEEEEE"}}
        />
      </div>
    );
  }
}

export default Landing;
