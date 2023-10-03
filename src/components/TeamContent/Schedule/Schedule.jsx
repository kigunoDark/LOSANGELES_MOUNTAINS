import React from "react";
import "./Schedule.css";
import "../../../App.css";
import { SCHEDULE_LIST, SCHEDULE_TITLE } from "./ScheduleConstants";

/**
 * Schedule component for displaying team schedules.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {number} props.tab - The active tab for displaying different schedules.
 * @returns {JSX.Element} The Schedule component JSX.
 */

function Schedule({ tab }) {
  return (
    <div className="team_schedule_container">
      <div className="team_schedule">
        <div className="team_schedule_row">
          <h2>{SCHEDULE_TITLE}</h2>
          <div className="team_schedule_name"></div>
        </div>
        {tab === 0
          ? SCHEDULE_LIST[0].map(({ id, date, event }) => (
              <div key={id} className="team_schedule_row">
                <div className="team_schedule_date">{date}</div>
                <div className="team_schedule_name">{event}</div>
              </div>
            ))
          : SCHEDULE_LIST[1].map(({ id, date, event }) => (
              <div key={id} className="team_schedule_row">
                <div className="team_schedule_date">{date}</div>
                <div className="team_schedule_name">{event}</div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Schedule;
