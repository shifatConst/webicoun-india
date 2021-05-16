import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpeg'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="text-center">
            <img src={banner} alt="" />
            <div>
                <Link to="/webinar" className="btn btn-primary">Webinar</Link>
                <Link to="/blogs" className="btn btn-primary">Blogs</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Home;