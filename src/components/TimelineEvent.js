import './TimelineEvent.css';
import TimeStamp from './TimeStamp';

const TimelineEvent = ({ person, timestamp, status }) => {
    return (
        <section className = "timeline-event">
            <h3 className="event-person">{person} </h3>
            <TimeStamp time={timestamp} className = "event-time" />
            <p className="event-status">{status}</p>
        </section>
    )
};

export default TimelineEvent;