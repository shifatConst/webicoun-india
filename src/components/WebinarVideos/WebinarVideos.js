import React from 'react';
import ReactPlayer from "react-player"
const WebinarVideos = (props) => {
    const { webiurl } = props.webinar;
    return (
        <div className="col-sm-6">
            <ReactPlayer className="m-3 text-center"
                url={webiurl}
            />
        </div>
    );
};

export default WebinarVideos;