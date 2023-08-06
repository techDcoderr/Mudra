import React from 'react';
import business from '../images/business.jpeg';
import Layouto from './Layout/Layouto';
const AboutUs = () => {
  return (
<Layouto>
    <div className="container position-relative">
      <h2 className="text-center news-heading">About Us</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={business} alt="Money Image" className="img-fluid" />
        </div>
        <div className="col-md-6">
         
          <p>
At Mudra, we are dedicated to providing you with the most accurate, reliable, and timely information on currency exchange rates. Whether you are a seasoned forex trader, a business traveler, or simply someone who is curious about global currencies, we have got you covered.


          </p>
          <p>
            Join us at Mudra and embark on a journey of financial discovery. Whether you are a seasoned investor or a curious learner, we invite you to explore our website and immerse yourself in the world of currency exchange rates and international monetary systems. Stay informed, stay empowered, and stay ahead with us!        </p>
        </div>
      </div>
    </div>
</Layouto>
  );
};

export default AboutUs;