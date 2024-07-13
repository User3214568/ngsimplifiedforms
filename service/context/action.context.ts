import {FormStepInterface} from "../../model/form-step.interface";
import {StepContext} from "./step.context";
import {FormActionInterface} from "../../model/form-action.interface";

export interface ActionContext extends StepContext {
  step: FormStepInterface;
  value: any;
  editMode: boolean;
  action: FormActionInterface;
}
