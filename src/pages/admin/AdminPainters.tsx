
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Painter, painters as initialPainters } from "@/data/painters";
import { useToast } from "@/hooks/use-toast";
import ProfessionalForm from "@/components/admin/professionals/ProfessionalForm";
import ProfessionalTable from "@/components/admin/professionals/ProfessionalTable";
import ConfirmDeleteDialog from "@/components/admin/common/ConfirmDeleteDialog";

const AdminPainters = () => {
  const [painters, setPainters] = useState<Painter[]>(initialPainters);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPainter, setCurrentPainter] = useState<Painter | null>(null);
  
  const { toast } = useToast();

  const handleAddPainter = (newPainter: Partial<Painter>) => {
    const painterId = `p${Date.now()}`;
    const painterToAdd = { ...newPainter, id: painterId, rank: painters.length + 1 } as Painter;
    setPainters([...painters, painterToAdd]);
    setIsAddDialogOpen(false);
    toast({
      title: "Painter Added",
      description: `${painterToAdd.name} has been added successfully.`
    });
  };

  const handleEditPainter = (updatedPainter: Partial<Painter>) => {
    if (!currentPainter) return;
    
    const updated = { ...currentPainter, ...updatedPainter };
    setPainters(painters.map(painter => 
      painter.id === currentPainter.id ? updated : painter
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Painter Updated",
      description: `${updated.name}'s information has been updated successfully.`
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
        <ProfessionalTable 
          professionals={painters}
          onEdit={(painter) => {
            setCurrentPainter(painter);
            setIsEditDialogOpen(true);
          }}
          onDelete={(painter) => {
            setCurrentPainter(painter);
            setIsDeleteDialogOpen(true);
          }}
          onMoveUp={moveRankUp}
          onMoveDown={moveRankDown}
        />
      </div>
      
      {/* Add Painter Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Painter</DialogTitle>
          </DialogHeader>
          <ProfessionalForm
            onSubmit={handleAddPainter}
            onCancel={() => setIsAddDialogOpen(false)}
            submitLabel="Add Painter"
            professionalType="painter"
          />
        </DialogContent>
      </Dialog>
      
      {/* Edit Painter Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Painter</DialogTitle>
          </DialogHeader>
          {currentPainter && (
            <ProfessionalForm
              professional={currentPainter}
              onSubmit={handleEditPainter}
              onCancel={() => setIsEditDialogOpen(false)}
              submitLabel="Save Changes"
              professionalType="painter"
            />
          )}
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeletePainter}
        title="Are you sure?"
        description={
          <>
            This will permanently delete the painter <strong>{currentPainter?.name}</strong>. 
            This action cannot be undone.
          </>
        }
      />
    </div>
  );
};

export default AdminPainters;
