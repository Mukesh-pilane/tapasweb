import React, {useState} from 'react'
import EventsModal from '../../components/Modals/EventsModal'

import EventCard from '../../components/EventsCard/EventCard';
import "./Events.css"


// const Events = () => {
//  
//   return (
//     <>
//     <button onClick={openDialog}>open up</button>
//     <EventsModal isOpen={isOpen} onClose={closeDialog} />
//     </>
//   )
// }

// export default Events

const Events = () => {
    const EventUpcomingData = [
        {
            name: "Mediation Workshop",
            subtitle: "Master the Art of Conflict Resolution",
            description: "Join us for an interactive workshop on mediation and conflict resolution techniques.",
            date: "16 Nov 2023",
            dateBackgroundColor: "#FF5733"
        },
        {
            name: "Mediation Conference",
            subtitle: "Exploring Innovative Mediation Practices",
            description: "A conference bringing together experts to discuss the latest trends in mediation.",
            date: "25 Sep 2023",
            dateBackgroundColor: "#2ECC71"
        },
        {
            name: "Mediation Training Seminar",
            subtitle: "Become a Certified Mediator",
            description: "Intensive training program to become a certified mediator. Limited seats available.",
            date: "10 Dec 2023",
            dateBackgroundColor: "#3498DB"
        }
    ];
    const EventPastData = [
        {
            name: "Past Mediation Webinar",
            subtitle: "Exploring Effective Mediation Techniques",
            description: "Join us for a webinar on proven mediation strategies for resolving conflicts.",
            date: "10 Jun 2023",
            dateBackgroundColor: "#FF5733"
        },
        {
            name: "Mediation Workshop",
            subtitle: "Mastering Conflict Resolution",
            description: "An interactive workshop focusing on practical mediation skills and case studies.",
            date: "18 Mar 2023",
            dateBackgroundColor: "#2ECC71"
        },
        {
            name: "Mediation Seminar",
            subtitle: "Insights into Modern Mediation Practices",
            description: "A seminar discussing the evolution of mediation methods and their real-world applications.",
            date: "05 Feb 2023",
            dateBackgroundColor: "#3498DB"
        }
    ];


    return (
        <section className='Event-main'>
            <div className="Event-container">
                <h1 className="gradient-text">Upcoming Events</h1>
                <div className="event-info">


                    {EventUpcomingData.map((event, index) => (
                        <EventCard
                            key={index}
                            name={event.name}
                            subtitle={event.subtitle}
                            description={event.description}
                            date={event.date}
                            dateBackgroundColor={event.dateBackgroundColor}
                        />
                    ))}
                    
                </div>
                <h1 className="gradient-text">Past Events</h1>
                <div className="event-info2">
                {EventPastData.map((event, index) => (
                        <EventCard
                            key={index}
                            name={event.name}
                            subtitle={event.subtitle}
                            description={event.description}
                            date={event.date}
                            dateBackgroundColor={event.dateBackgroundColor}
                        />
                    ))}
                    </div>

            </div>
        </section>
    )
}

export default Events