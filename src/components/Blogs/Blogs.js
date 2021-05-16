import React, { useEffect, useState } from 'react';
import BlogCards from '../BlogCards/BlogCards';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const api = 'https://webicoun-backend-hajkn.run-ap-south1.goorm.io/blogcat'
    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => setBlogs(data.blogs));
    }, []);

    return (
        <div className="row py-5">
            <h1 className="text-center mb-5">Total blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <BlogCards blog={blog}></BlogCards>)
            }
        </div>
    );
};

export default Blogs;