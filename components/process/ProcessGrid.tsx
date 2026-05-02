import { processSteps } from "@/data/process";
import { ProcessStep } from "./ProcessStep";

export function ProcessGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <ProcessStep key={step.id} {...step} />
      ))}
    </div>
  );
}
