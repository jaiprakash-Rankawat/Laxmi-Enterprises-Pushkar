
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, ArrowUp, ArrowDown } from "lucide-react";

interface Professional {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  experience: number;
  specialization: string;
  rank: number;
  image: string;
}

interface ProfessionalTableProps {
  professionals: Professional[];
  onEdit: (professional: Professional) => void;
  onDelete: (professional: Professional) => void;
  onMoveUp: (professional: Professional) => void;
  onMoveDown: (professional: Professional) => void;
}

const ProfessionalTable = ({
  professionals,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown
}: ProfessionalTableProps) => {
  const sortedProfessionals = [...professionals].sort((a, b) => a.rank - b.rank);

  return (
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
        {sortedProfessionals.map((professional) => (
          <TableRow key={professional.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <span>#{professional.rank}</span>
                <div className="flex flex-col">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 p-0"
                    disabled={professional.rank <= 1}
                    onClick={() => onMoveUp(professional)}
                  >
                    <ArrowUp size={14} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 p-0"
                    disabled={professional.rank >= professionals.length}
                    onClick={() => onMoveDown(professional)}
                  >
                    <ArrowDown size={14} />
                  </Button>
                </div>
              </div>
            </TableCell>
            <TableCell>{professional.name}</TableCell>
            <TableCell>{professional.phone}</TableCell>
            <TableCell>{professional.experience} years</TableCell>
            <TableCell>{professional.specialization}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 text-blue-600"
                onClick={() => onEdit(professional)}
              >
                <Edit size={14} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 text-rose"
                onClick={() => onDelete(professional)}
              >
                <Trash2 size={14} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProfessionalTable;
