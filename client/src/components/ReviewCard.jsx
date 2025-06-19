import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function ReviewCard({ review }) {
  return (
    <div className="flex justify-center items-center p-6 min-h-[400px]">
      <div className="relative max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
        
        {/* Avatar */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img 
            src={`https://backend.ashraful.in${review.picture}`} 
            alt={review.name}  
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Quote Icon */}
        <div className="mb-6">
          <FaQuoteLeft className="text-4xl text-blue-500 opacity-20 mx-auto" />
        </div>

        {/* Review Comment */}
        <p className="text-gray-600 mb-8 leading-relaxed text-lg italic">
          "{review.comment}"
        </p>

        {/* Name and Rating */}
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-gray-800">{review.name}</h3>
          <div className="flex justify-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar 
                key={index} 
                className={`text-lg ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-xl opacity-10"></div>
      </div>
    </div>
  );
}