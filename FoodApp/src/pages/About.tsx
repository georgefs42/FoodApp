import React from 'react';

/*Den här koden är utan CSS*/

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h5 className="section-title">ABOUT US</h5>
        <p className="sub-title">Food and Cocktails Menu</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident modi dolorem magnam? Officia nam quibusdam fugit deleniti earum esse. Magni ea praesentium amet molestias dolor quos perferendis architecto quas.</p>
        <div className="image-container">
          <img className="food-image" src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_640.jpg" alt="Img1" />
          <img className="food-image" src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="Img2" />
          <img className="drink-image" src="https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_640.jpg" alt="Img3" />
        </div>
        <p className="contact-info">Contact us: Phone: +46 70 - 123 45 67, Email: info@food-app.com</p>
        <button className="view-more-btn border-red-500 border-2 p-2 rounded-md">View More</button>
      </div>
    </section>
  );
};

export default About;
