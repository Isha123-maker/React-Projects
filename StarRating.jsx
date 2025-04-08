import { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold mb-4">Rate this product</h2>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              className={`text-4xl cursor-pointer transition-colors duration-200 ${
                starValue <= (hover || rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              aria-label={`Rate ${starValue} out of 5`}
            >
              {starValue <= (hover || rating) ? (
                <span className="fill-current text-4xl">★</span>
              ) : (
                <span className="fill-current">☆</span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-4 text-lg">
        {rating > 0 ? (
          <p>You rated this {rating} star{rating !== 1 ? 's' : ''}</p>
        ) : (
          <p className="text-gray-500">Hover or click to rate</p>
        )}
      </div>
    </div>
  );
};

export default StarRating;