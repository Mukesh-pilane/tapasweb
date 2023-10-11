import React, {useState} from 'react'

import EventCard from '../../components/EventsCard/EventCard';
import "./Events.css"
import practices from '../../data/dailypractices';
import main21days from '../../assets/images/Events/HomeEvents/21Days.webp';
import days1 from '../../assets/images/Events/Eventspage/21Days1.webp';
import dyas2 from '../../assets/images/Events/Eventspage/21Days2.webp';
import days3 from '../../assets/images/Events/Eventspage/21Days3.webp';
import days4 from '../../assets/images/Events/Eventspage/21Days4.webp';


import maindhyanratri from '../../assets/images/Events/HomeEvents/dhyanratri.webp';
import dhyanratri1 from '../../assets/images/Events/Eventspage/dhyanratri1.jpg';
import dhyanratri2 from '../../assets/images/Events/Eventspage/dhyanratri2.jpg';
import dhyanratri3 from '../../assets/images/Events/Eventspage/dhyanratri3.jpg';
import dhyanratri4 from '../../assets/images/Events/Eventspage/dhyanratri4.jpg';



import kanha0 from '../../assets/images/Events/HomeEvents/kanha.webp';
import kanha1 from '../../assets/images/Events/Eventspage/kanha1.jpg';
import kanha2 from '../../assets/images/Events/Eventspage/kanha2.jpg';
import kanha3 from '../../assets/images/Events/Eventspage/kanha3.webp';
import kanha4 from '../../assets/images/Events/Eventspage/kanha4.jpg';
import kanha5 from '../../assets/images/Events/Eventspage/kanha5.jpg';
import kanha6 from '../../assets/images/Events/Eventspage/kanha6.jpg';
import kanha7 from '../../assets/images/Events/Eventspage/kanha7.jpg';
import kanha8 from '../../assets/images/Events/Eventspage/kanha8.jpg';

import dhyanotsav0 from '../../assets/images/Events/HomeEvents/dhyanotsav.webp';
import dhyanotsav1 from '../../assets/images/Events/Eventspage/dhyanotsav1.webp';
import dhyanotsav2 from '../../assets/images/Events/Eventspage/dhyanotsav2.webp';
import dhyanotsav3 from '../../assets/images/Events/Eventspage/dhyanotsav3.webp';
import dhyanotsav4 from '../../assets/images/Events/Eventspage/dhyanotsav4.webp';

import yogaDay0 from '../../assets/images/Events/Eventspage/yogaDay0.jpg';
import yogaDay1 from '../../assets/images/Events/Eventspage/yogaDay1.jpg';
import yogaDay2 from '../../assets/images/Events/Eventspage/yogaDay2.jpg';
import yogaDay3 from '../../assets/images/Events/Eventspage/yogaDay3.jpg';
import yogaDay4 from '../../assets/images/Events/Eventspage/yogaDay4.jpg';
import yogaDay5 from '../../assets/images/Events/Eventspage/yogaDay5.jpg';



const Events = () => {
    const EventUpcomingData = [
        {
            name: "Dhyanratri 2023",
            subtitle: "Master the Art of Conflict Resolution",
            description: `TAPAS-PCE is back with Dhyanratri 2023,  a 9 days journey to nurture your mind, body and soul.Incorporating meditation into your Navratri observance can deepen your connection with yourself, find mental clarity and help you navigate the festivities with greater mindfulness and devotion.`,
            date: "15 oct 2023",
            dateBackgroundColor: "#FF5733",
            link: "https://forms.gle/yEUSVmhyAcvpciTx7"
        },
    ];
    const EventPastData = [
        // {
        //     name: "Meditation Session at College",
        //     subtitle: "Exploring Effective Mediation Techniques",
        //     description: "On February 5th, TAPAS-PCE and Heartfulness led a meditation session at Pillai College, promoting emotional well-being for 150 participants and featuring youth-related discussions.",
        //     date: "5 Feb 2023",
        //     dateBackgroundColor: "#FF5733",
        //     images : practices[0].slides
        // },
        
        {
            name: "21 Days Meditation Challenge 2023",
            subtitle: "Insights into Modern Mediation Practices",
            description: `
            The "Har Dil Dhyan Har Dil Dhyan" campaign in Panvel Ashram celebrated holistic well-being and Indian cultural heritage through yoga and meditation.`,
            date: "13 May 2023",
            dateBackgroundColor: "#3498DB",
            images : [main21days,  days1, dyas2, days3, days4]

        },
        {
            name: "Dhyanratri",
            subtitle: "Mastering Conflict Resolution",
            description: "TAPAS-PCE launched the Dhyanratri event in September 2022, a 9-day meditation drive during Navratri from 26 September to 4 October 2022.",
            date: "26 Sept 2022",
            dateBackgroundColor: "#2ECC71",
            images : [maindhyanratri, dhyanratri1, dhyanratri2, dhyanratri3, dhyanratri4]

        },
        {
            name: "Kanha",
            subtitle: "Mastering Conflict Resolution",
            description: `On August 11, 2022, participants arrived at Kanha Shanti Vanam for a conference featuring meditation, inspirational talks, and workshops focused on self-kindness and its societal impact`,
            date: "12 Aug 2023",
            dateBackgroundColor: "#FF5733",
            images : [kanha0, kanha1, kanha2, kanha3, kanha4, kanha5, kanha6, kanha7, kanha8]

        },
        {
            name: "Dhyanotsav 2022",
            subtitle: "Mastering Conflict Resolution",
            description: `TAPAS-PCE's Dhyanotsav 2022 event, guided by several mentors, introduced first-year students to meditation's benefits, with relaxation sessions, guided meditation, and insightful speeches, concluding with goody bags from Pillai College.`,
            date: "27 Sept 2022",
            dateBackgroundColor: "#6499E9",
            images : [dhyanotsav0, dhyanotsav1, dhyanotsav2, dhyanotsav3, dhyanotsav4]
        },
        {
            name: "Yoga for Humanity",
            subtitle: "Mastering Conflict Resolution",
            description: `TAPAS-PCE celebrated International Yoga Day with a session led by Dr. Shridevi Kulkarni and Deepali Ma'am, emphasizing yoga's physical and mental well-being benefits and recognizing outstanding participants and instructors.`,
            date: "21 june 2023",
            dateBackgroundColor: "#BEADFA",
            images : [yogaDay0, yogaDay1, yogaDay2, yogaDay3, yogaDay4, yogaDay5]

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
                            link={event.link}
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
                            images={event.images}
                        />
                    ))}
                    </div>

            </div>
        </section>
    )
}

export default Events