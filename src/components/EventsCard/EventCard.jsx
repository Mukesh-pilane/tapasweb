import React, {useState} from "react";
import EventsModal from '../../components/Modals/EventsModal'

import "./EventCard.css"


const EventCard = ({ name, subtitle, description, date, dateBackgroundColor, images  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () => {
        setIsOpen(true);
    };
    const closeDialog = () => {
        setIsOpen(false);
    };
    const eventDate = new Date(date);
    const currentDate = new Date();

    // Extract day, month, and year from the Date object
    const eventDay = eventDate.getDate();
    const eventMonth = eventDate.toLocaleString('default', { month: 'short' });
    const eventYear = eventDate.getFullYear();
    const dateBackgroundStyle = {
        backgroundColor: dateBackgroundColor,
    };
    const isPastEvent = eventDate < currentDate;
    const buttonText = isPastEvent ? "Know More" : "Register";


    return (
        <>
        <article className="events-card-container-main">
            <div className="event-date-container">
                <div className="event-date-background" style={dateBackgroundStyle}>
                <div className="event-date-day">
                    {eventDay}
                </div>
                <div className="event-date-month">
                    {eventMonth}
                </div>
                <div className="event-date-year">
                    {eventYear}
                </div>
                </div>

            </div>
            <div className="event-info-container">
                <h4>{name}</h4>
                <h3>{subtitle}</h3>
                <p>{description}</p>
            </div>
            <div className="event-register-button">
            <button onClick={isPastEvent ? openDialog : null}>{buttonText}</button>
            </div>
          <EventsModal isOpen={isOpen} onClose={closeDialog} images={images}/>
        </article>
        </>
    );
};

export default EventCard;
