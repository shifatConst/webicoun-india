import React from 'react';

const Footer = () => {
    return (
        <div className="row py-5 bg-dark text-white">
            <div className="col-sm-8">
                <h3>About Webicoun India</h3>
                <p>Webicoun is a health-tech organization focusing on Emotional, Mental and Physical wellness through Webinars and Counselling. We aim at solving any type of challenges/problems faced by an individual so that these problems do not accumulate and become a major problem in long run.</p>
            </div>
            <div className="col-sm-4">
                <h3>About Us</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                    <li>Login As Expert</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;