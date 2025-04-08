
import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogFooter 
} from "@/components/ui/dialog";
import { 
  AlertDialog, AlertDialogAction, AlertDialogCancel, 
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter, 
  AlertDialogHeader, AlertDialogTitle 
} from "@/components/ui/alert-dialog";
import { Painter, painters as initialPainters } from "@/data/painters";
import { Edit, Trash2, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminPainters = () => {
  const [painters, setPainters] = useState<Painter[]>(initialPainters);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPainter, setCurrentPainter] = useState<Painter | null>(null);
  const [newPainter, setNewPainter] = useState<Omit<Painter, "id">>({
    name: "",
    phone: "",
    email: "",
    address: "",
    experience: 0,
    specialization: "",
    rank: 0,
    image: "/placeholder.svg"
  });
  
  const { toast } = useToast();

  const handleAddPainter = () => {
    const painterId = `p${Date.now()}`;
    const painterToAdd = { ...newPainter, id: painterId, rank: painters.length + 1 };
    setPainters([...painters, painterToAdd]);
    setIsAddDialogOpen(false);
    setNewPainter({
      name: "",
      phone: "",
      email: "",
      address: "",
      experience: 0,
      specialization: "",
      rank: 0,
      image: "/placeholder.svg"
    });
    toast({
      title: "Painter Added",
      description: `${painterToAdd.name} has been added successfully.`
    });
  };

  const handleEditPainter = () => {
    if (!currentPainter) return;
    
    setPainters(painters.map(painter => 
      painter.id === currentPainter.id ? currentPainter : painter
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Painter Updated",
      description: `${currentPainter.name}'s information has been updated successfully.`
    });
  };

  const handleDeletePainter = () => {
    if (!currentPainter) return;
    
    // Remove the painter
    const filteredPainters = painters.filter(painter => painter.id !== currentPainter.id);
    
    // Update ranks of remaining painters
    const updatedPainters = filteredPainters.map((painter, index) => ({
      ...painter,
      rank: index + 1
    }));
    
    setPainters(updatedPainters);
    setIsDeleteDialogOpen(false);
    toast({
      title: "Painter Deleted",
      description: `${currentPainter.name} has been removed successfully.`
    });
  };

  const moveRankUp = (painter: Painter) => {
    if (painter.rank <= 1) return;
    
    const updatedPainters = painters.map(p => {
      if (p.id === painter.id) {
        return { ...p, rank: p.rank - 1 };
      } else if (p.rank === painter.rank - 1) {
        return { ...p, rank: p.rank + 1 };
      }
      return p;
    });
    
    setPainters(updatedPainters.sort((a, b) => a.rank - b.rank));
    toast({
      title: "Rank Updated",
      description: `${painter.name}'s rank has been increased.`
    });
  };

  const moveRankDown = (painter: Painter) => {
    if (painter.rank >= painters.length) return;
    
    const updatedPainters = painters.map(p => {
      if (p.id === painter.id) {
        return { ...p, rank: p.rank + 1 };
      } else if (p.rank === painter.rank + 1) {
        return { ...p, rank: p.rank - 1 };
      }
      return p;
    });
    
    setPainters(updatedPainters.sort((a, b) => a.rank - b.rank));
    toast({
      title: "Rank Updated",
      description: `${painter.name}'s rank has been decreased.`
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-navy">Painters</h1>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-navy hover:bg-lightblue"
        >
          <Plus size={16} className="mr-2" /> Add Painter
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Specialization</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {painters.sort((a, b) => a.rank - b.rank).map((painter) => (
              <TableRow key={painter.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>#{painter.rank}</span>
                    <div className="flex flex-col">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 p-0"
                        disabled={painter.rank <= 1}
                        onClick={() => moveRankUp(painter)}
                      >
                        <ArrowUp size={14} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 p-0"
                        disabled={painter.rank >= painters.length}
                        onClick={() => moveRankDown(painter)}
                      >
                        <ArrowDown size={14} />
                      </Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{painter.name}</TableCell>
                <TableCell>{painter.phone}</TableCell>
                <TableCell>{painter.experience} years</TableCell>
                <TableCell>{painter.specialization}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-blue-600"
                    onClick={() => {
                      setCurrentPainter(painter);
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
                      setCurrentPainter(painter);
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
      
      {/* Add Painter Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Painter</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input
                id="name"
                value={newPainter.name}
                onChange={(e) => setNewPainter({...newPainter, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="phone" className="text-right">
                Phone
              </label>
              <Input
                id="phone"
                value={newPainter.phone}
                onChange={(e) => setNewPainter({...newPainter, phone: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right">
                Email
              </label>
              <Input
                id="email"
                value={newPainter.email}
                onChange={(e) => setNewPainter({...newPainter, email: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="address" className="text-right">
                Address
              </label>
              <Input
                id="address"
                value={newPainter.address}
                onChange={(e) => setNewPainter({...newPainter, address: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="experience" className="text-right">
                Experience (years)
              </label>
              <Input
                id="experience"
                type="number"
                value={newPainter.experience}
                onChange={(e) => setNewPainter({...newPainter, experience: parseInt(e.target.value)})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="specialization" className="text-right">
                Specialization
              </label>
              <Input
                id="specialization"
                value={newPainter.specialization}
                onChange={(e) => setNewPainter({...newPainter, specialization: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddPainter} className="bg-navy hover:bg-lightblue">Add Painter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Painter Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Painter</DialogTitle>
          </DialogHeader>
          {currentPainter && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right">
                  Name
                </label>
                <Input
                  id="edit-name"
                  value={currentPainter.name}
                  onChange={(e) => setCurrentPainter({...currentPainter, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-phone" className="text-right">
                  Phone
                </label>
                <Input
                  id="edit-phone"
                  value={currentPainter.phone}
                  onChange={(e) => setCurrentPainter({...currentPainter, phone: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-email" className="text-right">
                  Email
                </label>
                <Input
                  id="edit-email"
                  value={currentPainter.email}
                  onChange={(e) => setCurrentPainter({...currentPainter, email: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-address" className="text-right">
                  Address
                </label>
                <Input
                  id="edit-address"
                  value={currentPainter.address}
                  onChange={(e) => setCurrentPainter({...currentPainter, address: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-experience" className="text-right">
                  Experience (years)
                </label>
                <Input
                  id="edit-experience"
                  type="number"
                  value={currentPainter.experience}
                  onChange={(e) => setCurrentPainter({...currentPainter, experience: parseInt(e.target.value)})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-specialization" className="text-right">
                  Specialization
                </label>
                <Input
                  id="edit-specialization"
                  value={currentPainter.specialization}
                  onChange={(e) => setCurrentPainter({...currentPainter, specialization: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditPainter} className="bg-navy hover:bg-lightblue">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the painter <strong>{currentPainter?.name}</strong>. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePainter} className="bg-rose hover:bg-rose/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminPainters;
