import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Title, { ManageTitle } from "../Title";
const localizer = momentLocalizer(moment);

const events = [
  {
    title: <Title />,
    start: new Date(2024, 6, 7, 10, 0), 
    end: new Date(2024, 6, 7, 11, 0),   
  },
 
  {
    title: <ManageTitle />,
    start: new Date(2024, 6,  7, 5, 0),
    end: new Date(2024, 6,  7, 6, 0),
  },
  {
    title: <ManageTitle />,
    start: new Date(2024, 6,  7, 8, 0),
    end: new Date(2024, 6,  7, 9, 0),
  },
  {
    title: <ManageTitle />,
    start: new Date(2024, 6, 7, 3, 0),
    end: new Date(2024, 6,  7, 4, 0),
  },

];

const TimeSlots = ({click}) => (
  <div style={{ height: 800 }}>
    <Calendar
      localizer={localizer}
      events={events}
      views={['day']} 
      // step={60} 
      defaultView='day' 
      onSelectEvent={click}
      // selectable
      // onSelectSlot={(slotInfo) => console.log(slotInfo)} 
    />
  </div>
);

export default TimeSlots;
