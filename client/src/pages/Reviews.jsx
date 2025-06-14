import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  useEffect(() => {
    fetch('https://node.ashraful.in/review')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      startSlider();
    }
    return () => stopSlider();
  }, [reviews.length]);

  const startSlider = () => {
    stopSlider();
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % reviews.length);
    }, 4000);
  };

  const stopSlider = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const goToPrev = () => {
    setCurrentSlide(prev => (prev - 1 + reviews.length) % reviews.length);
    startSlider();
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % reviews.length);
    startSlider();
  };

  if (reviews.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gradient-to-b from-base-100 to-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Client Testimonials</h1>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-base-content/80 max-w-2xl mx-auto">
            Hear what our valued clients say about their experience with us.
          </p>
        </div>

        <div 
          className="relative overflow-hidden rounded-xl shadow-2xl bg-base-100"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary shadow-lg hover:scale-110 transition-transform"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary shadow-lg hover:scale-110 transition-transform"
          >
            <FaChevronRight className="text-xl" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-base-content/30'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/add-review" 
            className="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl transition-all"
          >
            Share Your Experience
          </Link>
          <p className="mt-4 text-base-content/70">
            We value your feedback! Help us improve our services.
          </p>
        </div>
      </div>
    </div>
  );
}
