
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Plumber, plumbers as initialPlumbers } from "@/data/plumbers";
import { useToast } from "@/hooks/use-toast";
import ProfessionalForm from "@/components/admin/professionals/ProfessionalForm";
import ProfessionalTable from "@/components/admin/professionals/ProfessionalTable";
import ConfirmDeleteDialog from "@/components/admin/common/ConfirmDeleteDialog";

const AdminPlumbers = () => {
  const [plumbers, setPlumbers] = useState<Plumber[]>(initialPlumbers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPlumber, setCurrentPlumber] = useState<Plumber | null>(null);
  
  const { toast } = useToast();

  const handleAddPlumber = (newPlumber: Partial<Plumber>) => {
    const plumberId = `pl${Date.now()}`;
    const plumberToAdd = { ...newPlumber, id: plumberId, rank: plumbers.length + 1 } as Plumber;
    setPlumbers([...plumbers, plumberToAdd]);
    setIsAddDialogOpen(false);
    toast({
      title: "Plumber Added",
      description: `${plumberToAdd.name} has been added successfully.`
    });
  };

  const handleEditPlumber = (updatedPlumber: Partial<Plumber>) => {
    if (!currentPlumber) return;
    
    const updated = { ...currentPlumber, ...updatedPlumber };
    setPlumbers(plumbers.map(plumber => 
      plumber.id === currentPlumber.id ? updated : plumber
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Plumber Updated",
      description: `${updated.name}'s information has been updated successfully.`
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
        <ProfessionalTable 
          professionals={plumbers}
          onEdit={(plumber) => {
            setCurrentPlumber(plumber);
            setIsEditDialogOpen(true);
          }}
          onDelete={(plumber) => {
            setCurrentPlumber(plumber);
            setIsDeleteDialogOpen(true);
          }}
          onMoveUp={moveRankUp}
          onMoveDown={moveRankDown}
        />
      </div>
      
      {/* Add Plumber Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Plumber</DialogTitle>
          </DialogHeader>
          <ProfessionalForm
            onSubmit={handleAddPlumber}
            onCancel={() => setIsAddDialogOpen(false)}
            submitLabel="Add Plumber"
            professionalType="plumber"
          />
        </DialogContent>
      </Dialog>
      
      {/* Edit Plumber Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Plumber</DialogTitle>
          </DialogHeader>
          {currentPlumber && (
            <ProfessionalForm
              professional={currentPlumber}
              onSubmit={handleEditPlumber}
              onCancel={() => setIsEditDialogOpen(false)}
              submitLabel="Save Changes"
              professionalType="plumber"
            />
          )}
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeletePlumber}
        title="Are you sure?"
        description={
          <>
            This will permanently delete the plumber <strong>{currentPlumber?.name}</strong>. 
            This action cannot be undone.
          </>
        }
      />
    </div>
  );
};

export default AdminPlumbers;
