import React from 'react';

const BlogCards = (props) => {
    const { author, image, title } = props.blog
    return (
        <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>Read Full Story...</p>
                <h5>{author}</h5>
            </div>
        </div>
    );
};

export default BlogCards;