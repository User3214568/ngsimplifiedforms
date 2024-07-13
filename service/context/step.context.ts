import {FormStepInterface} from "../../model/form-step.interface";

export interface StepContext {
  step: FormStepInterface;
  value: object;
  editMode: boolean;
}
