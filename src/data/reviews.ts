
export interface Review {
  id: string;
  entityId: string;
  entityType: 'product' | 'painter' | 'plumber' | 'website';
  rating: number;
  review: string;
  userName: string;
  userEmail?: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    entityId: "website",
    entityType: "website",
    rating: 5,
    review: "Great website! Really easy to navigate and find exactly what I need.",
    userName: "Ajay Sharma",
    date: "2023-11-15"
  },
  {
    id: "r2",
    entityId: "website",
    entityType: "website",
    rating: 4,
    review: "Very good selection of products and reasonable prices.",
    userName: "Priya Patel",
    date: "2023-12-10"
  },
  {
    id: "r3",
    entityId: "p1",
    entityType: "product",
    rating: 5,
    review: "Excellent quality paint, goes on smoothly and the color is perfect.",
    userName: "Rahul Verma",
    date: "2024-01-05"
  },
  {
    id: "r4",
    entityId: "pl1",
    entityType: "plumber",
    rating: 5,
    review: "Very professional and efficient service. Fixed our leaky pipe in no time.",
    userName: "Ananya Gupta",
    date: "2024-02-20"
  },
  {
    id: "r5",
    entityId: "p1",
    entityType: "painter",
    rating: 4,
    review: "Did an excellent job painting our living room. Very neat work.",
    userName: "Vikram Singh",
    date: "2024-03-10"
  }
];

// Function to get reviews by entity type and ID
export const getReviewsByEntityId = (entityType: Review['entityType'], entityId: string): Review[] => {
  return reviews.filter(review => 
    review.entityType === entityType && review.entityId === entityId
  );
};

// Function to get website reviews
export const getWebsiteReviews = (): Review[] => {
  return reviews.filter(review => review.entityType === 'website');
};

// Function to get average rating for an entity
export const getAverageRating = (entityType: Review['entityType'], entityId: string): number => {
  const entityReviews = getReviewsByEntityId(entityType, entityId);
  if (entityReviews.length === 0) return 0;
  
  const totalRating = entityReviews.reduce((sum, review) => sum + review.rating, 0);
  return parseFloat((totalRating / entityReviews.length).toFixed(1));
};

// Function to add a new review
export const addReview = (review: Omit<Review, 'id' | 'date'>) => {
  const newReview: Review = {
    ...review,
    id: `r${reviews.length + 1}`,
    date: new Date().toISOString().split('T')[0]
  };
  
  reviews.push(newReview);
  return newReview;
};
