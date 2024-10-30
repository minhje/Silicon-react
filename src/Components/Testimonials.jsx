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
          

          {reviews.map((item) => (
            <div key={item.id} className="card">
          
           <div className="quote-marks">
            <i className="fa-solid fa-quote-left"></i>
            </div>
            
              <div className="starRating"> 
                {Array(item.starRating).fill().map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p>{item.comment}</p>

              <div className='author'>
              <img src={item.avatarUrl} alt={`${item.author} avatar`}/>

              <div className="name-role">
              <p className='name'>{item.author}</p>
              <p className='jobRole'>{item.jobRole}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
