import { CheckCircle2 } from "lucide-react";

interface MedicalBadgeProps {
  reviewer: string;
  date: string;
}

export function MedicalBadge({ reviewer, date }: MedicalBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
      <CheckCircle2 className="h-4 w-4 text-primary" />
      <div className="text-sm">
        <span className="font-medium text-primary">Medically Reviewed</span>
        <span className="text-muted-foreground">
          {" "}by {reviewer} • {date}
        </span>
      </div>
    </div>
  );
}
