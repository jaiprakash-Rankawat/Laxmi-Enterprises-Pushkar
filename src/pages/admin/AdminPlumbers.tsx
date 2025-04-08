
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
import { Plumber, plumbers as initialPlumbers } from "@/data/plumbers";
import { Edit, Trash2, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminPlumbers = () => {
  const [plumbers, setPlumbers] = useState<Plumber[]>(initialPlumbers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPlumber, setCurrentPlumber] = useState<Plumber | null>(null);
  const [newPlumber, setNewPlumber] = useState<Omit<Plumber, "id">>({
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

  const handleAddPlumber = () => {
    const plumberId = `pl${Date.now()}`;
    const plumberToAdd = { ...newPlumber, id: plumberId, rank: plumbers.length + 1 };
    setPlumbers([...plumbers, plumberToAdd]);
    setIsAddDialogOpen(false);
    setNewPlumber({
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
      title: "Plumber Added",
      description: `${plumberToAdd.name} has been added successfully.`
    });
  };

  const handleEditPlumber = () => {
    if (!currentPlumber) return;
    
    setPlumbers(plumbers.map(plumber => 
      plumber.id === currentPlumber.id ? currentPlumber : plumber
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Plumber Updated",
      description: `${currentPlumber.name}'s information has been updated successfully.`
    });
  };

  const handleDeletePlumber = () => {
    if (!currentPlumber) return;
    
    // Remove the plumber
    const filteredPlumbers = plumbers.filter(plumber => plumber.id !== currentPlumber.id);
    
    // Update ranks of remaining plumbers
    const updatedPlumbers = filteredPlumbers.map((plumber, index) => ({
      ...plumber,
      rank: index + 1
    }));
    
    setPlumbers(updatedPlumbers);
    setIsDeleteDialogOpen(false);
    toast({
      title: "Plumber Deleted",
      description: `${currentPlumber.name} has been removed successfully.`
    });
  };

  const moveRankUp = (plumber: Plumber) => {
    if (plumber.rank <= 1) return;
    
    const updatedPlumbers = plumbers.map(p => {
      if (p.id === plumber.id) {
        return { ...p, rank: p.rank - 1 };
      } else if (p.rank === plumber.rank - 1) {
        return { ...p, rank: p.rank + 1 };
      }
      return p;
    });
    
    setPlumbers(updatedPlumbers.sort((a, b) => a.rank - b.rank));
    toast({
      title: "Rank Updated",
      description: `${plumber.name}'s rank has been increased.`
    });
  };

  const moveRankDown = (plumber: Plumber) => {
    if (plumber.rank >= plumbers.length) return;
    
    const updatedPlumbers = plumbers.map(p => {
      if (p.id === plumber.id) {
        return { ...p, rank: p.rank + 1 };
      } else if (p.rank === plumber.rank + 1) {
        return { ...p, rank: p.rank - 1 };
      }
      return p;
    });
    
    setPlumbers(updatedPlumbers.sort((a, b) => a.rank - b.rank));
    toast({
      title: "Rank Updated",
      description: `${plumber.name}'s rank has been decreased.`
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-navy">Plumbers</h1>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-navy hover:bg-lightblue"
        >
          <Plus size={16} className="mr-2" /> Add Plumber
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
            {plumbers.sort((a, b) => a.rank - b.rank).map((plumber) => (
              <TableRow key={plumber.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span>#{plumber.rank}</span>
                    <div className="flex flex-col">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 p-0"
                        disabled={plumber.rank <= 1}
                        onClick={() => moveRankUp(plumber)}
                      >
                        <ArrowUp size={14} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 p-0"
                        disabled={plumber.rank >= plumbers.length}
                        onClick={() => moveRankDown(plumber)}
                      >
                        <ArrowDown size={14} />
                      </Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{plumber.name}</TableCell>
                <TableCell>{plumber.phone}</TableCell>
                <TableCell>{plumber.experience} years</TableCell>
                <TableCell>{plumber.specialization}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-blue-600"
                    onClick={() => {
                      setCurrentPlumber(plumber);
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
                      setCurrentPlumber(plumber);
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
      
      {/* Add Plumber Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Plumber</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input
                id="name"
                value={newPlumber.name}
                onChange={(e) => setNewPlumber({...newPlumber, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="phone" className="text-right">
                Phone
              </label>
              <Input
                id="phone"
                value={newPlumber.phone}
                onChange={(e) => setNewPlumber({...newPlumber, phone: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right">
                Email
              </label>
              <Input
                id="email"
                value={newPlumber.email}
                onChange={(e) => setNewPlumber({...newPlumber, email: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="address" className="text-right">
                Address
              </label>
              <Input
                id="address"
                value={newPlumber.address}
                onChange={(e) => setNewPlumber({...newPlumber, address: e.target.value})}
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
                value={newPlumber.experience}
                onChange={(e) => setNewPlumber({...newPlumber, experience: parseInt(e.target.value)})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="specialization" className="text-right">
                Specialization
              </label>
              <Input
                id="specialization"
                value={newPlumber.specialization}
                onChange={(e) => setNewPlumber({...newPlumber, specialization: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddPlumber} className="bg-navy hover:bg-lightblue">Add Plumber</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Plumber Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Plumber</DialogTitle>
          </DialogHeader>
          {currentPlumber && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right">
                  Name
                </label>
                <Input
                  id="edit-name"
                  value={currentPlumber.name}
                  onChange={(e) => setCurrentPlumber({...currentPlumber, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-phone" className="text-right">
                  Phone
                </label>
                <Input
                  id="edit-phone"
                  value={currentPlumber.phone}
                  onChange={(e) => setCurrentPlumber({...currentPlumber, phone: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-email" className="text-right">
                  Email
                </label>
                <Input
                  id="edit-email"
                  value={currentPlumber.email}
                  onChange={(e) => setCurrentPlumber({...currentPlumber, email: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-address" className="text-right">
                  Address
                </label>
                <Input
                  id="edit-address"
                  value={currentPlumber.address}
                  onChange={(e) => setCurrentPlumber({...currentPlumber, address: e.target.value})}
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
                  value={currentPlumber.experience}
                  onChange={(e) => setCurrentPlumber({...currentPlumber, experience: parseInt(e.target.value)})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-specialization" className="text-right">
                  Specialization
                </label>
                <Input
                  id="edit-specialization"
                  value={currentPlumber.specialization}
                  onChange={(e) => setCurrentPlumber({...currentPlumber, specialization: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditPlumber} className="bg-navy hover:bg-lightblue">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the plumber <strong>{currentPlumber?.name}</strong>. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePlumber} className="bg-rose hover:bg-rose/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminPlumbers;
