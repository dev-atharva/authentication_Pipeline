import { AlertTriangle } from "lucide-react";

interface Formerrorprops {
  message?: string;
}

export const FormError = ({ message }: Formerrorprops) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-destructive/15 flex items-center rounded-md text-destructive p-3 gap-x-2 text-sm">
      <AlertTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
