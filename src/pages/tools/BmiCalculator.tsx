import { useState } from "react";
import ToolPage from "@/pages/ToolPage";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const BmiCalculator = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBmi = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h) return;

    let result = 0;
    if (unit === "metric") {
      const hM = h / 100; // cm to m
      result = w / (hM * hM);
    } else {
      result = 703 * w / (h * h);
    }

    setBmi(parseFloat(result.toFixed(1)));
  };

  const getBmiCategory = (value: number) => {
    if (value < 18.5) return { label: "Underweight", color: "text-blue-500" };
    if (value < 25) return { label: "Normal weight", color: "text-green-500" };
    if (value < 30) return { label: "Overweight", color: "text-yellow-500" };
    return { label: "Obese", color: "text-red-500" };
  };

  return (
    <ToolPage
      title="BMI Calculator"
      description="Use this calculator to check your Body Mass Index (BMI) and find out if you're a healthy weight."
      disclaimer="This calculator provides an estimate and may not be accurate for athletes, elderly people, or pregnant women. Consult a healthcare provider for professional advice."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <RadioGroup 
            defaultValue="metric" 
            onValueChange={(v) => setUnit(v as "metric" | "imperial")}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="metric" id="metric" />
              <Label htmlFor="metric">Metric (kg/cm)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="imperial" id="imperial" />
              <Label htmlFor="imperial">Imperial (lbs/in)</Label>
            </div>
          </RadioGroup>

          <div className="grid gap-2">
            <Label htmlFor="weight">Weight ({unit === "metric" ? "kg" : "lbs"})</Label>
            <Input 
              id="weight" 
              type="number" 
              placeholder={unit === "metric" ? "70" : "150"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="height">Height ({unit === "metric" ? "cm" : "inches"})</Label>
            <Input 
              id="height" 
              type="number" 
              placeholder={unit === "metric" ? "175" : "69"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <Button onClick={calculateBmi} className="w-full">Calculate BMI</Button>
        </div>

        <div className="flex items-center justify-center rounded-lg bg-muted p-6">
          {bmi ? (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Your BMI is</p>
              <div className="text-5xl font-bold mb-2">{bmi}</div>
              <div className={`text-xl font-semibold ${getBmiCategory(bmi).color}`}>
                {getBmiCategory(bmi).label}
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              Enter your details to see your result
            </div>
          )}
        </div>
      </div>
    </ToolPage>
  );
};

export default BmiCalculator;
