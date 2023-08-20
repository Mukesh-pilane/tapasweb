import React from "react";
import "./EventCard.css"


const EventCard = ({ name, subtitle, description, date, dateBackgroundColor  }) => {
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
            <button>{buttonText}</button>
            </div>
        </article>
    );
};

export default EventCard;
