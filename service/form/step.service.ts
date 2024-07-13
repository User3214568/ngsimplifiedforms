import {FormStepInterface} from "../../model/form-step.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StepService {
  getDefaultActiveStep(steps: Map<number, FormStepInterface>): FormStepInterface {
    if (steps.size < 1) {
      throw new Error('Steps map is empty');
    }
    const entries = [...steps.entries()].
    sort((entry1, entry2)=> entry1[0] - entry2[0]
    );
    return entries[0][1];
  }

  getAdjacentStep(activeStep: number, steps: Map<number, FormStepInterface>, direction: number): FormStepInterface {
    if (![1, -1].includes(direction)) {
      throw new Error('Adjecent step direction must be either 1 or -1.');
    }
    const step = steps.get(activeStep + direction);
    if (!step) {
      throw new Error(`Step ${activeStep + direction} not found.`)
    }
    return step;
  }

  getStep(stepNumber: number, steps: Map<number, FormStepInterface>): FormStepInterface {
    const step = steps.get(stepNumber);
    if (!step) {
      throw new Error(`Step with number ${stepNumber} not found.`);
    }
    return step;
  }

  getNextStep(activeStep: number, steps: Map<number, FormStepInterface>): FormStepInterface {
    return this.getAdjacentStep(activeStep, steps, 1);
  }

  getPreviousStep(activeStep: number, steps: Map<number, FormStepInterface>): FormStepInterface {
    return this.getAdjacentStep(activeStep, steps, -1);
  }



}
