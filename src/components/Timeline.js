import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({ events }) => {
    const eventComponents = events.map(event => {
        return (
            <TimelineEvent
            person = {event.person}
            status = {event.status}
            timestamp = {event.timestamp}
            />
        )
    })

    return ( 
        // { props.event.map((ev))}
    )
};

export default Timeline;
