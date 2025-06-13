import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Client Reviews</h1>
      <div className="carousel w-full">
        {reviews.map((review, index) => (
          <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
            <ReviewCard review={review} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${(index - 1 + reviews.length) % reviews.length}`} className="btn btn-circle">❮</a>
              <a href={`#slide${(index + 1) % reviews.length}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
