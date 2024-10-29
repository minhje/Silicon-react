import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="testimonials">
      <div className="container">

        <div className="headline">
          <h2>Clients are Loving Our App</h2>
        </div>

        <div className="review"> 
          
           <div className="quote-marks">
        <i className="fa-solid fa-quote-left"></i>
        </div>

          {reviews.map((item) => (
            <div key={item.id} className="card">
          
              <div className="starRating"> 
                {Array(item.starRating).fill().map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p>{item.comment}</p>
              <img src={item.avatar} alt={`${item.author}'s avatar`} />
              <p>{item.author}</p>
              <p>{item.jobRole}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
