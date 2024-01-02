import { CheckCircle } from "lucide-react";

interface Formsuccessprops {
  message?: string;
}

export const FormSuccess = ({ message }: Formsuccessprops) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-emerald-500/15 flex items-center rounded-md text-emerald-500 p-3 gap-x-2 text-sm">
      <CheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
