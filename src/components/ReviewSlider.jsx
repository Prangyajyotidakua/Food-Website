import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewSlider = () => {
  // Sample data for reviews
  const reviewsData = [
    {
      id: 1,
      name: 'Alice',
      photo: 'https://placekitten.com/100/100',
      review: 'The food was amazing! 5 stars!',
    },
    {
      id: 2,
      name: 'Bob',
      photo: 'https://placekitten.com/101/101',
      review: 'Delicious dishes and great service. 5 stars!',
    },
    {
      id: 3,
      name: 'Charlie',
      photo: 'https://placekitten.com/102/102',
      review: 'Fantastic experience. Highly recommend. 5 stars!',
    },
    // Add more reviews as needed
  ];

  // Slick settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <Slider {...sliderSettings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="text-center">
            <img
              src={review.photo}
              alt={review.name}
              className="rounded-full mx-auto mb-4"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-600 mb-4">{review.review}</p>
            <div className="flex justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-yellow-500 ${star <= 5 ? 'fill-star' : 'empty-star'}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
