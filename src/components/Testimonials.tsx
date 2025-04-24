"use client";

import { FC, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bride",
      image: "/testimonials/testimonial.jpg",
      quote: "The bridal collection from Wafrah Gold exceeded my expectations. The craftsmanship is exquisite and the designs are timeless. I received countless compliments on my wedding day!",
      rating: 5
    },
    {
      id: 2,
      name: "Raj Malhotra",
      role: "Businessman",
      image: "/testimonials/testimonial.jpg",
      quote: "I purchased a gold chain for my father's 60th birthday. The quality is outstanding and the customer service was exceptional. Will definitely shop here again.",
      rating: 5
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Fashion Influencer",
      image: "/testimonials/testimonial.jpg",
      quote: "As someone who wears jewelry daily, I can attest to the superior quality of Wafrah Gold pieces. Their contemporary designs stand out while maintaining traditional craftsmanship.",
      rating: 4
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Anniversary Gift",
      image: "/testimonials/testimonial.jpg",
      quote: "The diamond pendant I purchased for our anniversary was stunning. My wife was speechless when she opened it. Worth every rupee spent!",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">What Our Clients Say About Us</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-amber-600 p-2 rounded-full shadow-md hover:bg-amber-50"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-amber-600 p-2 rounded-full shadow-md hover:bg-amber-50"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-amber-200">
                  <Image 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-4 text-amber-600">
                  {/* Quote Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 italic mb-6 text-lg">{testimonials[activeIndex].quote}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-amber-800">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill={i < testimonials[activeIndex].rating ? "#d4af37" : "#e5e7eb"} 
                        className="w-5 h-5"
                      >
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-amber-600' : 'bg-amber-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
