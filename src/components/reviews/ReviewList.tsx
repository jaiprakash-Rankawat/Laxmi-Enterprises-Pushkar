
import { useState } from "react";
import { Review } from "@/data/reviews";
import ReviewStars from "./ReviewStars";
import { Button } from "@/components/ui/button";
import ReviewForm from "./ReviewForm";

interface ReviewListProps {
  reviews: Review[];
  entityId: string;
  entityType: 'product' | 'painter' | 'plumber' | 'website';
  showAddReview?: boolean;
}

const ReviewList = ({ reviews, entityId, entityType, showAddReview = true }: ReviewListProps) => {
  const [isAddingReview, setIsAddingReview] = useState(false);
  
  if (reviews.length === 0 && !showAddReview) {
    return (
      <div className="py-8 text-center text-gray-500">
        No reviews yet. Be the first to leave a review!
      </div>
    );
  }
  
  const handleReviewSuccess = () => {
    setIsAddingReview(false);
    // In a real app, you would refresh the reviews list here
  };
  
  return (
    <div className="space-y-8">
      {reviews.length > 0 && (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-medium">
                    {review.userName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">{review.userName}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <ReviewStars rating={review.rating} />
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      )}
      
      {showAddReview && (
        <div>
          {!isAddingReview ? (
            <div className="flex justify-center">
              <Button 
                onClick={() => setIsAddingReview(true)}
                className="bg-navy hover:bg-lightblue text-white px-6"
              >
                Write a Review
              </Button>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-semibold text-navy mb-4">Write a Review</h3>
              <ReviewForm 
                entityId={entityId}
                entityType={entityType}
                onSuccess={handleReviewSuccess}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewList;
