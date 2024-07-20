import {FormStepInterface} from "../../model/form-step.interface";
import {ValidityContext} from "./validity.context";

export interface ActionWrapperContext extends ValidityContext {
  step: FormStepInterface;
  value: object;
  editMode: boolean;
}
