import {FormStepInterface} from "../../model/form-step.interface";

export interface StepWrapperContext {
  value: object;
  steps: Map<number, FormStepInterface>;
  editMode: boolean;
}
