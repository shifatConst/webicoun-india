import React, { useEffect, useState } from 'react';
import UpcomingWebinars from '../UpcomingWebinars/UpcomingWebinars';
import WebinarVideos from '../WebinarVideos/WebinarVideos';

const Webinar = () => {
    const [webinars, setWebinars] = useState([])
    const [upcomingWebinars, setUpComingWebinars] = useState([])

    useEffect(() => {
        fetch('https://webicoun-backend-hajkn.run-ap-south1.goorm.io/webinars')
            .then(res => res.json())
            .then(data => setWebinars(data.webinars))
    }, [])

    useEffect(() => {
        fetch('https://webicoun-backend-hajkn.run-ap-south1.goorm.io/upcomingwebinars')
            .then(res => res.json())
            .then(data => setUpComingWebinars(data.webinars))
    }, [])
    return (
        <div className="row">

            <h3 className="text-center m-5">We Have {upcomingWebinars.length} Upcoming Webinars For You</h3>
            {
                upcomingWebinars.map(upcomingWebinar => <UpcomingWebinars upcomingWebinar={upcomingWebinar}></UpcomingWebinars>)
            }

            <h3 className="text-center m-5">We Have Done {webinars.length} Webinars For You</h3>
            {
                webinars.map(webinar => <WebinarVideos webinar={webinar}></WebinarVideos>)
            }
        </div>
    );
};

export default Webinar;