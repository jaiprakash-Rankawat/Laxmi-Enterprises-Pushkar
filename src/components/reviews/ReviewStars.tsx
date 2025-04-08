
import { Star } from "lucide-react";

interface ReviewStarsProps {
  rating: number;
  maxRating?: number;
  size?: "small" | "medium" | "large";
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const ReviewStars = ({ 
  rating, 
  maxRating = 5, 
  size = "medium", 
  interactive = false,
  onRatingChange
}: ReviewStarsProps) => {
  
  const starSizes = {
    small: 'w-3 h-3',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };
  
  const starContainerSizes = {
    small: 'gap-0.5',
    medium: 'gap-1',
    large: 'gap-1.5'
  };

  const handleStarClick = (selectedRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div className={`flex ${starContainerSizes[size]}`}>
      {[...Array(maxRating)].map((_, i) => {
        const starValue = i + 1;
        const filled = starValue <= rating;
        
        return (
          <Star
            key={i}
            className={`${starSizes[size]} ${filled ? 'text-amber fill-amber' : 'text-gray-300'} 
              ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            onClick={() => handleStarClick(starValue)}
          />
        );
      })}
    </div>
  );
};

export default ReviewStars;
