'use client'
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    image: '/photo1.png',
    testimonial:
      '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
    stars: 5,
  },
  {
    name: 'Jane Smith',
    image: '/photo2.png',
    testimonial:
      '“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”',
    stars: 4,
  },
  {
    name: 'Sam Wilson',
    image: '/photo3.png',
    testimonial:
      '“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”',
    stars: 5,
  },
  {
    name: 'Sara Connor',
    image: '/photo1.png',
    testimonial: 'Excellent customer service.',
    stars: 5,
  },
  {
    name: 'Bruce Wayne',
    image: '/photo2.png',
    testimonial: 'Very satisfied with my purchase.',
    stars: 4,
  },
  {
    name: 'Bruce Wayne',
    image: '/photo3.png',
    testimonial: 'Very satisfied with my purchase.',
    stars: 4,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3); // Default number of cards per slide

  

    
    

  

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 hidden md:block">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex min-w-full flex-shrink-0">
              {testimonials.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((testimonial, index) => (
                <div key={index} className="w-2/3 p-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start text-start h-80">
                    <div className="md:flex mb-8 md:gap-2">
                      {Array.from({ length: testimonial.stars }, (_, i) => (
                        <svg key={i} className="w-[28px] h-[28px] text-[#FFAA00]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.691h4.173c.969 0 1.371 1.24.588 1.81l-3.373 2.448a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.538 1.118l-3.373-2.448a1 1 0 00-1.176 0l-3.373 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.43 9.395c-.783-.57-.381-1.81.588-1.81h4.173a1 1 0 00.95-.691l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#464D61] md:text-[16px] md:w-[276px] overflow-hidden text-ellipsis">{testimonial.testimonial}</p>
                    <div className='flex items-center mt-10'>
                      <img src={testimonial.image} alt={testimonial.name} className="w-[48px] h-[48px] rounded-full  mr-2" />
                      <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="absolute bg-primary top-1/2 left-0 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-lg"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute bg-primary top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-lg"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
