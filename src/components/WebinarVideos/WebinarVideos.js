import React from 'react';

const WebinarVideos = (props) => {
    const { webiurl } = props.webinar;
    return (
        <div className="col-sm-3">
            <iframe width="420" height="315"
                src={webiurl}>
            </iframe>
        </div>
    );
};

export default WebinarVideos;