
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addReview } from "@/data/reviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ReviewStars from "./ReviewStars";

interface ReviewFormProps {
  entityId: string;
  entityType: 'product' | 'painter' | 'plumber' | 'website';
  onSuccess?: () => void;
}

interface ReviewFormValues {
  userName: string;
  userEmail: string;
  review: string;
}

const ReviewForm = ({ entityId, entityType, onSuccess }: ReviewFormProps) => {
  const [rating, setRating] = useState(5);
  
  const form = useForm<ReviewFormValues>({
    defaultValues: {
      userName: "",
      userEmail: "",
      review: ""
    }
  });

  const onSubmit = (data: ReviewFormValues) => {
    addReview({
      entityId,
      entityType,
      rating,
      userName: data.userName,
      userEmail: data.userEmail || undefined,
      review: data.review
    });
    
    toast.success("Thank you for your review!");
    form.reset();
    setRating(5);
    if (onSuccess) onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6">
          <label className="block text-navy font-medium mb-2">Your Rating</label>
          <ReviewStars 
            rating={rating} 
            size="large" 
            interactive 
            onRatingChange={setRating}
          />
        </div>

        <FormField
          control={form.control}
          name="review"
          rules={{ required: "Please enter your review" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy">Your Review</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us what you think..."
                  className="min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="userName"
            rules={{ required: "Please enter your name" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy">Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="userEmail"
            rules={{ 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy">Your Email (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="bg-navy hover:bg-lightblue text-white"
        >
          Submit Review
        </Button>
      </form>
    </Form>
  );
};

export default ReviewForm;
