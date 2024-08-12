import React, { useState } from "react";
import events from "../resource/event";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const Scheduler: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEvents, setSelectedEvents] = useState<typeof events>([]);

  const handleShowMore = (events: any, date: Date) => {
    setShowModal(true);
    setSelectedEvents(events);
  };

  return (
    <div style={{ height: 700 }}>
      <BigCalendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onShowMore={handleShowMore}
      />
    </div>
  );
};

export default Scheduler