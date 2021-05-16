import React, { useEffect, useState } from 'react';
import WebinarVideos from '../WebinarVideos/WebinarVideos';

const Webinar = () => {
   const [webinars, setWebinars] = useState([])
   useEffect(() => {
       fetch('https://webicoun-backend-hajkn.run-ap-south1.goorm.io/webinars')
       .then(res => res.json())
       .then(data => setWebinars(data.webinars))
   }, [])
    return (
        <div className="row">
            {
                webinars.map(webinar => <WebinarVideos webinar={webinar}></WebinarVideos>)
            }
        </div>
    );
};

export default Webinar;