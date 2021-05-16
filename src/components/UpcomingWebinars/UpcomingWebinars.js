import React from 'react';

const UpcomingWebinars = (props) => {
    const {webiurl} = props.upcomingWebinar;
    return (
        <div className="col-sm-6 text-center">
            <img src={webiurl} style={{width: "31.25rem", height: "25rem"}} alt="" />
        </div>
    );
};

export default UpcomingWebinars;