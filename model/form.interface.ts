import {FormStepAnnotationInterface, FormStepInterface} from "./form-step.interface";
import {CommonInterface} from "./common.interface";

export interface FormAnnotationInterface extends CommonInterface {
  description?: string;
  editTitle?: string;
  editDescription?: string;
  steps?: FormStepAnnotationInterface[];
}

export interface FormInterface extends Omit<FormAnnotationInterface, 'steps'> {
  steps: Map<number,FormStepInterface>;
  editMode: boolean;
}
