
import { useState, useEffect } from "react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogFooter 
} from "@/components/ui/dialog";
import { 
  AlertDialog, AlertDialogAction, AlertDialogCancel, 
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter, 
  AlertDialogHeader, AlertDialogTitle 
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, Check, X, Star } from "lucide-react";
import { Review, reviews as initialReviews, addReview } from "@/data/reviews";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { painters } from "@/data/painters";
import { plumbers } from "@/data/plumbers";
import { products } from "@/data/products";

const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState<Review | null>(null);
  const [newReview, setNewReview] = useState<Omit<Review, 'id' | 'date'>>({
    entityId: "",
    entityType: "website",
    rating: 5,
    review: "",
    userName: "",
    userEmail: ""
  });
  
  const { toast } = useToast();
  
  const getEntityName = (entityType: string, entityId: string) => {
    if (entityType === "website") return "Website";
    if (entityType === "painter") {
      const painter = painters.find(p => p.id === entityId);
      return painter ? painter.name : "Unknown Painter";
    }
    if (entityType === "plumber") {
      const plumber = plumbers.find(p => p.id === entityId);
      return plumber ? plumber.name : "Unknown Plumber";
    }
    if (entityType === "product") {
      const product = products.find(p => p.id === entityId);
      return product ? product.name : "Unknown Product";
    }
    return "Unknown";
  };
  
  const handleAddReview = () => {
    if (!newReview.userName || !newReview.review || !newReview.entityId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    const addedReview = addReview(newReview);
    setReviews([...reviews, addedReview]);
    setIsAddDialogOpen(false);
    setNewReview({
      entityId: "",
      entityType: "website",
      rating: 5,
      review: "",
      userName: "",
      userEmail: ""
    });
    
    toast({
      title: "Review Added",
      description: "The review has been added successfully."
    });
  };

  const handleEditReview = () => {
    if (!currentReview) return;
    
    const updatedReviews = reviews.map(review => 
      review.id === currentReview.id ? currentReview : review
    );
    
    setReviews(updatedReviews);
    // Also update the global reviews array to ensure changes persist
    initialReviews.splice(0, initialReviews.length);
    updatedReviews.forEach(review => initialReviews.push(review));
    
    setIsEditDialogOpen(false);
    
    toast({
      title: "Review Updated",
      description: "The review has been updated successfully."
    });
  };

  const handleDeleteReview = () => {
    if (!currentReview) return;
    
    const filteredReviews = reviews.filter(review => review.id !== currentReview.id);
    setReviews(filteredReviews);
    
    // Also update the global reviews array to ensure changes persist
    initialReviews.splice(0, initialReviews.length);
    filteredReviews.forEach(review => initialReviews.push(review));
    
    setIsDeleteDialogOpen(false);
    
    toast({
      title: "Review Deleted",
      description: "The review has been deleted successfully."
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? "text-amber fill-amber" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-navy">Reviews Management</h1>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-navy hover:bg-lightblue"
        >
          Add Review
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Review</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.date}</TableCell>
                <TableCell className="capitalize">{review.entityType}</TableCell>
                <TableCell>{getEntityName(review.entityType, review.entityId)}</TableCell>
                <TableCell>{renderStars(review.rating)}</TableCell>
                <TableCell>{review.userName}</TableCell>
                <TableCell className="max-w-[200px] truncate">{review.review}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-blue-600"
                    onClick={() => {
                      setCurrentReview(review);
                      setIsEditDialogOpen(true);
                    }}
                  >
                    <Edit size={14} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-rose"
                    onClick={() => {
                      setCurrentReview(review);
                      setIsDeleteDialogOpen(true);
                    }}
                  >
                    <Trash2 size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Edit Review Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Review</DialogTitle>
          </DialogHeader>
          {currentReview && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-username" className="text-right">
                  User Name
                </label>
                <Input
                  id="edit-username"
                  value={currentReview.userName}
                  onChange={(e) => setCurrentReview({...currentReview, userName: e.target.value})}
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-email" className="text-right">
                  User Email
                </label>
                <Input
                  id="edit-email"
                  value={currentReview.userEmail || ""}
                  onChange={(e) => setCurrentReview({...currentReview, userEmail: e.target.value})}
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right">
                  Rating
                </label>
                <div className="col-span-3 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setCurrentReview({...currentReview, rating: star})}
                      className={star <= currentReview.rating ? "text-amber" : "text-gray-300"}
                    >
                      <Star fill={star <= currentReview.rating ? "currentColor" : "none"} />
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-review" className="text-right">
                  Review
                </label>
                <Textarea
                  id="edit-review"
                  value={currentReview.review}
                  onChange={(e) => setCurrentReview({...currentReview, review: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditReview} className="bg-navy hover:bg-lightblue">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Add Review Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Review</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="entity-type" className="text-right">
                Review Type
              </label>
              <Select 
                value={newReview.entityType} 
                onValueChange={(value) => setNewReview({...newReview, entityType: value as Review['entityType'], entityId: ""})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="painter">Painter</SelectItem>
                  <SelectItem value="plumber">Plumber</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="entity-id" className="text-right">
                Entity
              </label>
              <Select 
                value={newReview.entityId} 
                onValueChange={(value) => setNewReview({...newReview, entityId: value})}
                disabled={newReview.entityType === ""}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Entity" />
                </SelectTrigger>
                <SelectContent>
                  {newReview.entityType === "website" && (
                    <SelectItem value="website">Website</SelectItem>
                  )}
                  {newReview.entityType === "product" && products.map(product => (
                    <SelectItem key={product.id} value={product.id}>{product.name}</SelectItem>
                  ))}
                  {newReview.entityType === "painter" && painters.map(painter => (
                    <SelectItem key={painter.id} value={painter.id}>{painter.name}</SelectItem>
                  ))}
                  {newReview.entityType === "plumber" && plumbers.map(plumber => (
                    <SelectItem key={plumber.id} value={plumber.id}>{plumber.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                User Name *
              </label>
              <Input
                id="username"
                value={newReview.userName}
                onChange={(e) => setNewReview({...newReview, userName: e.target.value})}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right">
                User Email
              </label>
              <Input
                id="email"
                value={newReview.userEmail || ""}
                onChange={(e) => setNewReview({...newReview, userEmail: e.target.value})}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">
                Rating *
              </label>
              <div className="col-span-3 flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setNewReview({...newReview, rating: star})}
                    className={star <= newReview.rating ? "text-amber" : "text-gray-300"}
                  >
                    <Star fill={star <= newReview.rating ? "currentColor" : "none"} />
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="review" className="text-right">
                Review *
              </label>
              <Textarea
                id="review"
                value={newReview.review}
                onChange={(e) => setNewReview({...newReview, review: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddReview} className="bg-navy hover:bg-lightblue">Add Review</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this review. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteReview} className="bg-rose hover:bg-rose/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminReviews;
