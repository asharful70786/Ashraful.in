import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReviewCard({ review }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[70vh] p-5 bg-base-200 rounded-lg">
      <img src={review.picture} alt={review.name} className="rounded-full w-32 h-32 mb-5 object-cover" />
      <h2 className="text-xl font-bold mb-2">{review.name}</h2>
      <div className="flex mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <p className="max-w-2xl text-center">{review.comment}</p>
    </div>
  );
}
