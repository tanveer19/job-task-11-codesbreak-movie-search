import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ value, onChange }) => {
  const maxRating = 5; // Set the maximum rating (e.g., 5 stars)

  const handleRatingChange = (newValue) => {
    // Call the onChange callback with the new rating value
    onChange(newValue);
  };

  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <FaStar
          key={index}
          className={`cursor-pointer ${
            index < value ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleRatingChange(index + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
