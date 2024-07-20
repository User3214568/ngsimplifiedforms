import {FormStepInterface} from "../../model/form-step.interface";
import {StepContext} from "./step.context";
import {FormActionInterface} from "../../model/form-action.interface";
import {ValidityContext} from "./validity.context";

export interface ActionContext extends ValidityContext {
  step: FormStepInterface;
  value: any;
  editMode: boolean;
  action: FormActionInterface;
}
