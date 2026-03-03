import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Info } from "lucide-react";

export const ArticleSidebar = () => {
  return (
    <div className="hidden xl:block space-y-6">
      {}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Info className="h-4 w-4 text-blue-600" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-2">
          <p>Always consult with your healthcare provider before starting any treatment.</p>
        </CardContent>
      </Card>

      {}
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700">
          This information is for educational purposes only and should not replace professional medical advice.
        </CardContent>
      </Card>
    </div>
  );
};
